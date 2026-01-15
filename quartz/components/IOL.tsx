import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function ShortAnswer(props: QuartzComponentProps) {
    const enableSA = props.fileData.frontmatter?.enableShortAnswer
    if (!enableSA) return <></>

    return (
      <div class="sa-component">
        <style>{`
          .sa-component {
            background: var(--light);
            border: 1px solid var(--lightgray);
            border-left: 5px solid #0ea5e9;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 8px;
          }
          .sa-header { font-weight: bold; margin-bottom: 5px; text-transform: uppercase; font-size: 0.8rem; color: var(--gray); }
          .sa-description { font-size: 0.8rem; color: var(--gray); margin-bottom: 15px; line-height: 1.4; }
          .sa-toggle { padding: 8px 12px; background: #0ea5e9; color: white; border: none; border-radius: 4px; cursor: pointer; width: 100%; font-weight: bold; }
          .sa-container { display: none; margin-top: 15px; }
          .sa-question-text { font-weight: bold; margin-bottom: 12px; font-size: 0.95rem; color: var(--dark); }
          .sa-input-group { display: flex; gap: 5px; margin-bottom: 10px; }
          .sa-input { flex-grow: 1; padding: 8px; border: 1px solid var(--lightgray); border-radius: 4px; font-family: inherit; background: var(--light); color: var(--dark); }
          .sa-btn { padding: 8px 15px; background: var(--dark); color: var(--light); border: none; border-radius: 4px; cursor: pointer; }
          .sa-feedback { margin-top: 12px; padding: 10px; border-radius: 4px; display: none; font-size: 0.85rem; }
          .sa-feedback.correct { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
          .sa-feedback.wrong { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
          .sa-next-btn { margin-top: 10px; width: 100%; padding: 8px; background: #0ea5e9; color: white; border: none; border-radius: 4px; cursor: pointer; display: none; }
        `}</style>

        <div class="sa-header">IOL Test Progress</div>
        {/* NEW DESCRIPTION ADDED HERE */}
        <div class="sa-description">Ready to decode? Use the sample IOL Test documentation found earlier on this page to find your answers.</div>
        
        <button class="sa-toggle-btn sa-toggle">Start Quiz</button>

        <div class="sa-container">
          <div class="sa-quiz-view">
            <div class="sa-step-info" style="font-size: 0.75rem; color: var(--gray); margin-bottom: 5px;">
                Question <span class="sa-current-idx">1</span> of 10
            </div>
            <div class="sa-question-display sa-question-text">Loading question...</div>
            
            <div class="sa-input-group">
              <input type="text" class="sa-user-input sa-input" placeholder="Type answer..." />
              <button class="sa-check-btn sa-btn">Check</button>
            </div>

            <div class="sa-feedback-box sa-feedback"></div>
            <button class="sa-next-btn">Next Question →</button>
          </div>

          <div class="sa-final-view" style="display:none; text-align: center; padding: 10px;">
              <h3>Done!</h3>
              <p>Score: <span class="sa-final-score">0</span>/10</p>
              <button class="sa-btn" onclick="location.reload()">Restart</button>
          </div>
        </div>
      </div>
    )
  }

ShortAnswer.afterDOMLoaded = `
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

  function normalize(s) { return s.toLowerCase().replace(/[.,!?'"\\\\/]/g, "").trim(); }

  document.querySelectorAll(".sa-component").forEach(root => {
    let currentIdx = 0;
    let score = 0;

    const toggleBtn = root.querySelector(".sa-toggle-btn");
    const container = root.querySelector(".sa-container");
    const qText = root.querySelector(".sa-question-display");
    const userInput = root.querySelector(".sa-user-input");
    const checkBtn = root.querySelector(".sa-check-btn");
    const feedbackBox = root.querySelector(".sa-feedback-box");
    const nextBtn = root.querySelector(".sa-next-btn");
    const quizView = root.querySelector(".sa-quiz-view");
    const finalView = root.querySelector(".sa-final-view");
    const currentNumDisplay = root.querySelector(".sa-current-idx");
    const finalScoreDisplay = root.querySelector(".sa-final-score");

    toggleBtn.addEventListener("click", () => {
      toggleBtn.style.display = "none";
      container.style.display = "block";
      loadQuestion();
    });

    function loadQuestion() {
      const qData = QUESTIONS[currentIdx];
      if (!qData) return;

      currentNumDisplay.innerText = currentIdx + 1;
      qText.innerText = qData.q;
      
      userInput.value = "";
      userInput.disabled = false;
      checkBtn.disabled = false;
      feedbackBox.style.display = "none";
      nextBtn.style.display = "none";
      userInput.focus();
    }

    checkBtn.addEventListener("click", () => {
      const userValue = userInput.value;
      if (!userValue) return;

      const userAns = normalize(userValue);
      const possibleAns = QUESTIONS[currentIdx].answers.map(a => normalize(a));
      
      userInput.disabled = true;
      checkBtn.disabled = true;
      feedbackBox.style.display = "block";

      if (possibleAns.includes(userAns)) {
        score++;
        feedbackBox.innerText = "✔ Correct!";
        feedbackBox.className = "sa-feedback correct";
      } else {
        feedbackBox.innerHTML = "✘ Incorrect. <br>Ans: " + QUESTIONS[currentIdx].answers[0];
        feedbackBox.className = "sa-feedback wrong";
      }

      nextBtn.style.display = "block";
    });

    nextBtn.addEventListener("click", () => {
      currentIdx++;
      if (currentIdx < QUESTIONS.length) {
        loadQuestion();
      } else {
        quizView.style.display = "none";
        finalView.style.display = "block";
        finalScoreDisplay.innerText = score;
      }
    });

    // Support Enter key for checking and moving to next
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (!checkBtn.disabled) checkBtn.click();
        else if (!nextBtn.disabled) nextBtn.click();
      }
    });
  });
`
  return ShortAnswer
}) satisfies QuartzComponentConstructor