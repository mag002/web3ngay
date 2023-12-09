document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "Which country held the 2016 Summer Olympics?",
      options: ["a) China", "b) Ireland", "c) Brazil", "d) Italy"],
      correctAnswer: "c",
    },
    {
      question: "Which planet is the hottest?",
      options: ["a) Venus", "b) Saturn", "c) Mercury", "d) Mars"],
      correctAnswer: "a",
    },
    {
      question: "What is the rarest blood type?",
      options: ["a) O", "b) A", "c) B", "d) AB-Negative"],
      correctAnswer: "d",
    },
    {
      question: "Which one of these characters is friends with Harry Potter?",
      options: ["a) Ron Weasley", "b) Doraemon", "c) Draco Malfoy"],
      correctAnswer: "a",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit-btn");

  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      // const radioBtn = document.createElement("input");
      // radioBtn.type = "radio";
      // radioBtn.name = "options";
      // radioBtn.value = option.charAt(0).toLowerCase();
      // radioBtn.classList=""

      // Create the radio container div
      const radioContainer = document.createElement("div");
      radioContainer.className = "flex items-center mb-4";

      // Create the radio input element
      const radioInput = document.createElement("input");
      radioInput.id = option.charAt(0).toLowerCase();
      radioInput.type = "radio";
      radioInput.value = option.charAt(0).toLowerCase();
      radioInput.name = "options";
      radioInput.className =
        "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600";

      // Create the label element
      const label = document.createElement("label");
      label.htmlFor = option.charAt(0).toLowerCase();
      label.className = "ms-2 text-sm font-medium ";
      label.textContent = option;

      // Append the radio input and label to the radio container
      radioContainer.appendChild(radioInput);
      radioContainer.appendChild(label);

      optionsContainer.appendChild(radioContainer);
      // optionsContainer.innerHTML += option + "<br>";
    });
  }

  function checkAnswer() {
    const selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      console.log("selectedOption");
      const userAnswer = selectedOption.value;
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;

      if (userAnswer === correctAnswer) {
        score += 5;
      }

      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        displayResult();
      }
    } else {
      alert("Please select an option.");
    }
  }

  function displayResult() {
    resultContainer.textContent = `Your final score is: ${score}/20`;

    // Task: print a message depending on the score
    // if the score is 15 or higher, print: "Wow, you know your stuff!";
    // if the score is between 5 and 15, print "Not bad!";
    // else, better luck next time.
    /* =========== Update your code here =========== */
    // User score variable is "score"
    // Use If / else if / else
    // Update resultContainer.textContent like the line 72

    // if (score >= 15) {
    //   resultContainer.textContent += "\nWow, you know your stuff!";
    // } else if (score >= 5 && score < 15) {
    //   resultContainer.textContent += "\nNot bad!";
    // } else {
    //   resultContainer.textContent += "\nbetter luck next time";
    // }

    /* ===========          END         =========== */

    submitButton.disabled = true;
  }

  loadQuestion();

  submitButton.addEventListener("click", checkAnswer);
});
