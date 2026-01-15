import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function Maze(props: QuartzComponentProps) {
    const enableMaze = props.fileData.frontmatter?.enableMaze
    if (!enableMaze) return <></>

    return (
      <div class="maze-component">
        <style>{`
          .maze-component {
            background: #f8f9fa;
            border-left: 5px solid #34495e;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 10px;
            font-family: monospace;
          }

          .maze-header {
            font-weight: bold;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .maze-grid {
            display: grid;
            grid-template-columns: repeat(15, 24px);
            gap: 2px;
            margin: 15px 0;
          }

          .maze-btn {
            padding: 8px 12px;
            background: #34495e;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 8px;
          }

          .maze-btn:hover {
            background: #2c3e50;
          }

          .maze-info {
            font-size: 0.9em;
            margin-top: 10px;
          }
        `}</style>

        <div class="maze-header">Maze Puzzle</div>

        {/* TOGGLE BUTTON */}
        <button id="maze-toggle" class="maze-btn">
          Show Maze
        </button>

        {/* MAZE CONTAINER */}
        <div id="maze-container" style="display:none;">
          <div style="height:8px;"></div>
          <button id="maze-reset" class="maze-btn">Generate New Maze</button>
          <div id="maze-grid" class="maze-grid"></div>
          <div id="maze-status" class="maze-info">
            Use arrow keys to move. Reach the green cell.
          </div>
        </div>
      </div>
    )
  }

  Maze.afterDOMLoaded = `
  /* ===========================
     TOGGLE VISIBILITY
  =========================== */

  const toggleBtn = document.getElementById("maze-toggle")
  const mazeContainer = document.getElementById("maze-container")

  let visible = false

  toggleBtn.addEventListener("click", () => {
    visible = !visible
    mazeContainer.style.display = visible ? "block" : "none"
    toggleBtn.innerText = visible ? "Hide Maze" : "Show Maze"
  })

  /* ===========================
     CLASSIC DFS MAZE
  =========================== */

  const SIZE = 15
  const CELL_SIZE = 21

  const gridEl = document.getElementById("maze-grid")
  const statusEl = document.getElementById("maze-status")
  const resetBtn = document.getElementById("maze-reset")

  const DIRS = [
    { dx: 0, dy: -1, wall: "top",    opp: "bottom" },
    { dx: 1, dy: 0,  wall: "right",  opp: "left"   },
    { dx: 0, dy: 1,  wall: "bottom", opp: "top"    },
    { dx: -1,dy: 0,  wall: "left",   opp: "right"  }
  ]

  let maze = []
  let player = { x: 0, y: 0 }
  let goal = { x: SIZE - 1, y: SIZE - 1 }

  function initMaze() {
    maze = Array.from({ length: SIZE }, () =>
      Array.from({ length: SIZE }, () => ({
        visited: false,
        top: true,
        right: true,
        bottom: true,
        left: true
      }))
    )
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  function carve(x, y) {
    maze[y][x].visited = true
    for (const d of shuffle([...DIRS])) {
      const nx = x + d.dx
      const ny = y + d.dy
      if (
        nx >= 0 && ny >= 0 &&
        nx < SIZE && ny < SIZE &&
        !maze[ny][nx].visited
      ) {
        maze[y][x][d.wall] = false
        maze[ny][nx][d.opp] = false
        carve(nx, ny)
      }
    }
  }

  function render() {
    gridEl.innerHTML = ""
    gridEl.style.gridTemplateColumns = \`repeat(\${SIZE}, \${CELL_SIZE}px)\`

    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        const c = maze[y][x]
        const cell = document.createElement("div")
        cell.style.width = CELL_SIZE + "px"
        cell.style.height = CELL_SIZE + "px"
        cell.style.boxSizing = "border-box"
        cell.style.borderTop    = c.top    ? "2px solid #374151" : "2px solid transparent"
        cell.style.borderRight  = c.right  ? "2px solid #374151" : "2px solid transparent"
        cell.style.borderBottom = c.bottom ? "2px solid #374151" : "2px solid transparent"
        cell.style.borderLeft   = c.left   ? "2px solid #374151" : "2px solid transparent"

        if (x === player.x && y === player.y)
          cell.style.background = "#3b82f6"
        if (x === goal.x && y === goal.y)
          cell.style.background = "#22c55e"

        gridEl.appendChild(cell)
      }
    }
  }

  function move(dx, dy, wall) {
    if (!maze[player.y][player.x][wall]) {
      player.x += dx
      player.y += dy
      render()
      if (player.x === goal.x && player.y === goal.y)
        statusEl.innerText = "✔ Maze solved."
    }
  }

  document.addEventListener("keydown", e => {
  // Only stop scrolling if the maze is actually visible
  if (!visible) return

  // Check if the key pressed is one of the arrow keys
  const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  if (keys.includes(e.key)) {
    // This stops the page from moving/scrolling
    e.preventDefault() 
    
    if (e.key === "ArrowUp")    move(0, -1, "top")
    if (e.key === "ArrowDown")  move(0,  1, "bottom")
    if (e.key === "ArrowLeft")  move(-1, 0, "left")
    if (e.key === "ArrowRight") move(1,  0, "right")
  }
})

  resetBtn.addEventListener("click", generateMaze)

  function generateMaze() {
    initMaze()
    carve(0, 0)
    player = { x: 0, y: 0 }
    goal = { x: SIZE - 1, y: SIZE - 1 }
    render()
    statusEl.innerText = "maze generated."
  }

  generateMaze()
  `
  return Maze
}) satisfies QuartzComponentConstructor
