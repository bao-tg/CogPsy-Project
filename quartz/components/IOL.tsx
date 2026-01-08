import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function ShortAnswer(props: QuartzComponentProps) {
    const enableSA = props.fileData.frontmatter?.enableShortAnswer
    if (!enableSA) return <></>

    return (
      <div class="sa-component">
        <style>{`
          .sa-component {
            background: #f8f9fa;
            border-left: 5px solid #0ea5e9;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 10px;
            font-family: monospace;
          }

          .sa-header {
            font-weight: bold;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .sa-toggle {
            padding: 8px 12px;
            background: #0ea5e9;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 10px;
          }

          .sa-toggle:hover {
            background: #0284c7;
          }

          .sa-question {
            margin-bottom: 14px;
          }

          .sa-input {
            padding: 6px;
            width: 220px;
            font-family: monospace;
          }

          .sa-btn {
            margin-left: 6px;
            padding: 6px 10px;
            cursor: pointer;
          }

          .sa-correct {
            color: #16a34a;
            font-weight: bold;
            margin-left: 10px;
          }

          .sa-wrong {
            color: #dc2626;
            font-weight: bold;
            margin-left: 10px;
          }

          .sa-explain {
            margin-top: 6px;
            padding-left: 10px;
            border-left: 3px solid #dc2626;
            font-size: 0.9em;
          }

          .sa-score {
            margin-top: 10px;
            font-weight: bold;
          }
        `}</style>

        <div class="sa-header">Sample IOL test</div>

        <button class="sa-toggle">Show Questions</button>

        <div class="sa-container" style="display:none;">
          <div class="sa-questions"></div>
          <div class="sa-score"></div>
        </div>
      </div>
    )
  }

ShortAnswer.afterDOMLoaded = `
/* ===========================
   QUESTIONS
=========================== */

const QUESTIONS = [
  { q: "Question 1", answers: ["And"] },
  { q: "Question 2", answers: ["Father"] },
  { q: "Question 3", answers: ["Woman", "Female"] },
  { q: "Question 4", answers: ["He is in a hurry"] },
  { q: "Question 5", answers: ["Child", "Children"] },
  { q: "Question 6", answers: ["The sister is talking"] },
  { q: "Question 7", answers: ["The parents are working without haste"] },
  { q: "Question 8", answers: ["The muted sister writes about the parent"] },
  { q: "Question 9", answers: ["You will be talked about"] },
  { q: "Question 10", answers: ["The letter was eaten by the hungry sister"] },
]

/* ===========================
   NORMALIZATION & CHECKING
=========================== */

/**
 * Normalize text answers:
 * - lowercase
 * - remove punctuation
 * - collapse spaces
 */
function normalizeText(s) {
  return s
    .toLowerCase()
    .replace(/[.,!?'"\\/]/g, "")
    .replace(/\\s+/g, " ")
    .trim()
}

/**
 * Compare two answers (text OR numeric)
 */
function isCorrect(user, solution) {
  // numeric check
  const x = Number(user)
  const y = Number(solution)
  if (!isNaN(x) && !isNaN(y)) {
    return Math.abs(x - y) < 1e-6
  }

  // text check
  return normalizeText(user) === normalizeText(solution)
}

/* ===========================
   INIT
=========================== */

document.querySelectorAll(".sa-component").forEach(root => {
  const toggleBtn = root.querySelector(".sa-toggle")
  const container = root.querySelector(".sa-container")
  const qEl = root.querySelector(".sa-questions")
  const scoreEl = root.querySelector(".sa-score")

  let visible = false
  let score = 0
  let answered = Array(QUESTIONS.length).fill(false)
  let initialized = false

  toggleBtn.addEventListener("click", () => {
    visible = !visible
    container.style.display = visible ? "block" : "none"
    toggleBtn.innerText = visible ? "Hide Questions" : "Show Questions"

    if (visible && !initialized) {
      render()
      initialized = true
    }
  })

  function render() {
    qEl.innerHTML = ""
    score = 0
    answered.fill(false)
    scoreEl.innerText = ""

    QUESTIONS.forEach((item, qi) => {
      const block = document.createElement("div")
      block.className = "sa-question"

      const q = document.createElement("div")
      q.innerHTML = item.q
      block.appendChild(q)

      const input = document.createElement("input")
      input.className = "sa-input"
      input.placeholder = "Your answer"

      const btn = document.createElement("button")
      btn.className = "sa-btn"
      btn.innerText = "Check"

      const result = document.createElement("div")
      result.className = "sa-result"

      btn.addEventListener("click", () => {
        if (answered[qi]) return
        answered[qi] = true

        const user = input.value
        let correct = false

        for (const ans of item.answers) {
          if (isCorrect(user, ans)) {
            correct = true
            break
          }
        }

        if (correct) {
          result.className = "sa-correct"
          result.innerText = "✔ Correct"
          score++
        } else {
          result.className = "sa-wrong"
          result.innerHTML = \`
            ✘ Wrong  
            <br><strong>Correct answer:</strong> \${item.answers.join(" / ")}
          \`
        }

        scoreEl.innerText = \`Score: \${score} / \${QUESTIONS.length}\`
        input.disabled = true
        btn.disabled = true
      })

      block.appendChild(input)
      block.appendChild(btn)
      block.appendChild(result)
      qEl.appendChild(block)
    })
  }
})
`


  return ShortAnswer
}) satisfies QuartzComponentConstructor
