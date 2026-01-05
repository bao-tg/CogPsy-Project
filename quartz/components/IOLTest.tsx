import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  // logic: changed name from IOL_test to IOLTest (standard React naming)
  function IOLTest(props: QuartzComponentProps) {
    // This looks for "enableTest: true" in your Markdown file's top section.
    const enableTest = props.fileData.frontmatter?.enableTest
    
    // If enableTest is not true, the component returns nothing (it stays invisible).
    if (!enableTest) {
      return <></>
    }
    return (
      <div class="iol-test-component">
        <style>{`
          .iol-test-component {
            background-color: #f8f9fa;
            border-left: 5px solid #2c3e50;
            padding: 1rem;
            margin: 1rem 0;
            font-family: 'Courier New', monospace;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .iol-header {
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 1.1em;
          }
          .symbol-display {
            background: white;
            padding: 15px;
            text-align: center;
            font-size: 1.8em;
            border: 2px dashed #ccc;
            margin-bottom: 20px;
            border-radius: 8px;
            min-height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .options-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .iol-btn {
            padding: 12px;
            background: #e9ecef;
            border: 1px solid #ced4da;
            cursor: pointer;
            border-radius: 4px;
            transition: all 0.2s;
            font-family: inherit;
            font-size: 0.9em;
            text-align: left;
          }
          .iol-btn:hover {
            background: #dee2e6;
            transform: translateY(-2px);
          }
          .iol-btn.primary {
            background: #2c3e50;
            color: white;
            text-align: center;
            width: 100%;
          }
          .feedback-area {
            margin-top: 15px;
            font-weight: bold;
            min-height: 1.5em;
            padding: 10px;
            border-radius: 4px;
          }
          .feedback-area.correct { background: #d4edda; color: #155724; }
          .feedback-area.incorrect { background: #f8d7da; color: #721c24; }
        `}</style>

        <div class="iol-header">Subject: Transcendental Algebra (1916)</div>

        <div id="iol-intro">
          <p>We have recovered strange symbols. Can you decode the logic?</p>
          <button id="iol-start-btn" class="iol-btn primary">Start Decryption</button>
        </div>

        <div id="iol-game-area" style="display: none;">
          <div id="iol-symbol" class="symbol-display">?</div>
          <div id="iol-question-text" style="margin-bottom: 10px; font-weight:bold;"></div>
          <div id="iol-options" class="options-grid"></div>
          <div id="iol-feedback" class="feedback-area" style="visibility: hidden;">Result placeholder</div>
        </div>
      </div>
    )
  }

  IOLTest.afterDOMLoaded = `
    const puzzleData = [
      { id: 1, symbol: "( A / B )", question: "Based on the records, what does this structure likely mean?", options: ["The father and the brother", "The giant and the wicked", "To write a letter"], correct: 0 },
      { id: 2, symbol: "n (> i)", question: "If 'n' means plural/many, translate this:", options: ["The orphan works alone", "The giants are working", "It was not us"], correct: 1 },
      { id: 3, symbol: "△", question: "What is the root meaning of the Triangle?", options: ["To Eat", "A Person / Human", "Time"], correct: 1 }
    ];

    let currentQ = 0;
    let score = 0;

    const introEl = document.getElementById('iol-intro');
    const gameEl = document.getElementById('iol-game-area');
    const symbolEl = document.getElementById('iol-symbol');
    const questionEl = document.getElementById('iol-question-text');
    const optionsEl = document.getElementById('iol-options');
    const feedbackEl = document.getElementById('iol-feedback');
    const startBtn = document.getElementById('iol-start-btn');

    function showQuestion(index) {
      if (index >= puzzleData.length) {
        finishGame();
        return;
      }
      const data = puzzleData[index];
      feedbackEl.style.visibility = 'hidden';
      feedbackEl.className = 'feedback-area';
      optionsEl.innerHTML = ''; 
      symbolEl.innerHTML = data.symbol;
      questionEl.innerText = data.question;

      data.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'iol-btn';
        btn.innerText = opt;
        btn.addEventListener('click', () => handleAnswer(i, data.correct));
        optionsEl.appendChild(btn);
      });
    }

    function handleAnswer(selected, correct) {
      feedbackEl.style.visibility = 'visible';
      if (selected === correct) {
        feedbackEl.innerText = "Correct!";
        feedbackEl.className = 'feedback-area correct';
        score++;
        setTimeout(() => { currentQ++; showQuestion(currentQ); }, 1000);
      } else {
        feedbackEl.innerText = "Incorrect. Try again.";
        feedbackEl.className = 'feedback-area incorrect';
      }
    }

    function finishGame() {
      symbolEl.innerHTML = "✔";
      questionEl.innerText = "Sequence Complete";
      optionsEl.innerHTML = "";
      feedbackEl.style.visibility = 'visible';
      feedbackEl.innerText = "Score: " + score + "/" + puzzleData.length;
    }

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        introEl.style.display = 'none';
        gameEl.style.display = 'block';
        showQuestion(0);
      });
    }
  `

  return IOLTest
}) satisfies QuartzComponentConstructor