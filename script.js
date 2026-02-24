// Quiz Questions
const questions = [
    {
      question: "What does HTML stand for?",
      answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "HighText Markdown Language", "None of these"],
      correct: 0
    },
    {
      question: "Which language is used for styling web pages?",
      answers: ["HTML", "CSS", "JavaScript", "Python"],
      correct: 1
    },
    {
      question: "Which language is used to add interactivity in websites?",
      answers: ["Python", "C++", "JavaScript", "SQL"],
      correct: 2
    },
    {
      question: "Which company developed Java?",
      answers: ["Microsoft", "Google", "Sun Microsystems", "Oracle"],
      correct: 2
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextBtn = document.getElementById("next-btn");
  const resultDiv = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultDiv.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach((answer, index) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.innerText = answer;
      btn.addEventListener("click", () => selectAnswer(index));
      li.appendChild(btn);
      answerButtons.appendChild(li);
    });
  }
  
  function resetState() {
    answerButtons.innerHTML = "";
    nextBtn.style.display = "none";
  }
  
  function selectAnswer(index) {
    let correctIndex = questions[currentQuestionIndex].correct;
    const buttons = answerButtons.getElementsByTagName("button");
  
    for (let i = 0; i < buttons.length; i++) {
      if (i === correctIndex) {
        buttons[i].classList.add("correct");
      }
      if (i === index && index !== correctIndex) {
        buttons[i].classList.add("wrong");
      }
      buttons[i].disabled = true;
    }
  
    if (index === correctIndex) {
      score++;
    }
  
    nextBtn.style.display = "inline-block";
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultDiv.classList.remove("hidden");
    scoreEl.innerText = `${score} / ${questions.length}`;
  }
  
  restartBtn.addEventListener("click", startQuiz);
  
  // Start quiz initially
  startQuiz();
  