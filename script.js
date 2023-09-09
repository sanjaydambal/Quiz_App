const quizQuestions = [
    {
      question: "Which biomolecule is used in the production of bioplastics like PHA and PLA?",
      options: ["Nucleic acids", "Lipids", "Carbohydrates", "Enzymes"],
      answer: "Carbohydrates"
    },
    {
      question: "What is the primary application of RNA vaccines like those used for Covid19?",
      options: ["DNA fingerprinting", "Biodiesel production", "Cleaning agents", "Vaccination against diseases"],
      answer: "Vaccination against diseases"
    },
    {
      question: "Whey protein and meat analogs are examples of the application of which biomolecule?",
      options: ["Proteins", "Carbohydrates", "Nucleic acids", "Lipids"],
      answer: "Proteins"
    },
    {
      question: "Glucose-oxidase is commonly used in biosensors. It is a type of:",
      options: ["Carbohydrate", "Nucleic acid", "Protein", "Enzyme"],
      answer: "Enzyme"
    },
    {
      question: "What role do lignolytic enzymes play in bio-bleaching processes?",
      options: ["Produce bioplastics", "Break down lignin in paper pulp", "Convert RNA into DNA", "Enhance food preservation"],
      answer: "Break down lignin in paper pulp"
    },
    {
      question: "Which human organ system is compared to a CPU system in terms of architecture and function?",
      options: ["Respiratory system", "Cardiovascular system", "Nervous system", "Muscular system"],
      answer: "Nervous system"
    },
    {
      question: "Robotic arms are used as prosthetics to assist individuals with which condition?",
      options: ["Osteoporosis", "Parkinson's disease", "Muscular dystrophy", "Cataract"],
      answer: "Parkinson's disease"
    },
    {
      question: "What is the primary function of a pacemaker in the heart?",
      options: ["Remove blockages in blood vessels", "Monitor ECG signals", "Correct cataract", "Regulate heart rate"],
      answer: "Regulate heart rate"
    },
    {
      question: "Abnormal lung physiology, known as COPD, is related to which organ system?",
      options: ["Kidneys", "Muscular system", "Skeletal system", "Respiratory system"],
      answer: "Respiratory system"
    },
    {
      question: "Spirometry is a test used to measure the functioning of which organ system?",
      options: ["Cardiovascular system", "Nervous system", "Respiratory system", "Muscular system"],
      answer: "Respiratory system"
    },
    {
      question: "What is the primary function of the kidney in the human body?",
      options: ["Filtration", "Pumping blood", "Digesting food", "Producing insulin"],
      answer: "Filtration"
    },
    {
      question: "Which architectural feature of the muscular and skeletal systems allows them to serve as scaffolds?",
      options: ["Joints", "Bones", "Tendons", "Ligaments"],
      answer: "Bones"
    },
    {
      question: "Bioengineering solutions for muscular dystrophy and osteoporosis primarily focus on improving which system?",
      options: ["Cardiovascular system", "Nervous system", "Muscular and Skeletal systems", "Respiratory system"],
      answer: "Muscular and Skeletal systems"
    },
    {
      question: "The lotus leaf effect, which creates superhydrophobic and self-cleaning surfaces, is inspired by:",
      options: ["Bird flying", "Echolocation", "Photosynthesis", "The lotus plant"],
      answer: "The lotus plant"
    },
    {
      question: "Which biomimetic design is responsible for reducing friction in swim suits, similar to shark skin?",
      options: ["Bird flying", "Lotus leaf effect", "Shark skin", "Echolocation"],
      answer: "Shark skin"
    },
    {
      question: "Echolocation is used for:",
      options: ["Bullet train design", "Ultrasonography", "Photovoltaic cells", "GPS navigation"],
      answer: "Ultrasonography"
    },
    {
      question: "Photosynthesis-inspired technology is used in the development of:",
      options: ["GPS navigation", "Aircraft design", "Bionic leaf", "Superhydrophobic surfaces"],
      answer: "Bionic leaf"
    },
    {
      question: "What is the primary application of 3D printing in bioengineering?",
      options: ["Creating electrical circuits", "Printing food", "Designing robotic arms", "Producing artificial organs"],
      answer: "Producing artificial organs"
    },
    {
      question: "DNA origami is a technique used in:",
      options: ["DNA fingerprinting", "3D printing", "Biocomputing", "ECG monitoring"],
      answer: "Biocomputing"
    },
    {
      question: "How is self-healing bioconcrete achieved in bioengineering?",
      options: ["Using nanobots", "Incorporating bacillus spores and nutrients", "Applying superhydrophobic coatings", "Utilizing DNA origami"],
      answer: "Incorporating bacillus spores and nutrients"
    }
  ];
//   const questionEle = document.getElementById("question");
//   const ansEle = document.getElementById("options");
//   const nextEle = document.getElementById("next");
//   let currentQuestionIndex = 0 ;
//   let score = 0;
//   const startQuiz = ()=>{
//   currentQuestionIndex = 0 ;
//   score = 0;
//   nextEle.innerHTML = "Next";
//   showQuestion();
//     }
//     const showQuestion = ()=>{
//         let currentQuestion = quizQuestions[currentQuestionIndex];
//         let questionNo = currentQuestionIndex+1;
//         questionEle.innerHTML = questionNo + "." + currentQuestion;
//         question;

//         currentQuestion.options.forEach(answer => {
//             const button = document.createElement("button");
//             button.innerHTML = options.answer;
//             button.classList.add("btn");
//             option.appendChild(button)
//         })
//     }
//     startQuiz();
 


const questionEle = document.getElementById("question");
const ansEle = document.getElementById("options");
const nextEle = document.getElementById("next");
const resultEle = document.getElementById("result"); // Get the result element

const nameInput = document.getElementById("name");
const usnInput = document.getElementById("usn");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let studentName = "";
let studentUSN = "";

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  answered = false;
  nextEle.style.display = "none"; // Hide "Next" initially
  studentName = nameInput.value;
  studentUSN = usnInput.value;
  showQuestion();
};

const showQuestion = () => {
  let currentQuestion = quizQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEle.innerHTML = questionNo + ". " + currentQuestion.question;
  ansEle.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerHTML = answer;
    button.classList.add("btn");
    button.addEventListener("click", () => checkAnswer(answer));
    ansEle.appendChild(button);
  });
};

const checkAnswer = (selectedOption) => {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }
  answered = true; // Set answered to true when a choice is made
  nextEle.style.display = "block"; // Display "Next" after answering
};

const showResult = () => {
  const resultMessage = `Congratulations ${studentName} bearing ${studentUSN} scored ${score}/20`;
  resultEle.innerHTML = resultMessage;
  resultEle.style.display = "block"; // Display the result div
  questionEle.innerHTML = "Quiz Completed";
  ansEle.innerHTML = "";
  nextEle.style.display = "none";
  

  // Store the result in local storage
  localStorage.setItem("quizResult", JSON.stringify({ name: studentName, usn: studentUSN, score: score }));
};

const retrieveResult = () => {
  // Retrieve the result from local storage
  const storedResult = localStorage.getItem("quizResult");
  if (storedResult) {
    const { name, usn, score } = JSON.parse(storedResult);
    resultEle.innerHTML = `Last result: ${name} bearing ${usn} scored ${score}/20`;
  }
};

nextEle.addEventListener("click", () => {
  if (answered) {
    currentQuestionIndex++;
    answered = false; // Reset answered for the next question
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
      nextEle.style.display = "none"; // Hide "Next" for the next question
    } else {
      showResult();
    }
  }
});

// Call retrieveResult to display the last result when the page loads
retrieveResult();

startQuiz();
