// SkillUp/data/satQuestions.js

// difficulty scale: 1 = easiest, 5 = hardest

const satQuestions = [
  {
    id: "M1",
    section: "Math",
    topic: "Algebra",
    difficulty: 1,
    type: "multiple-choice",
    question: "Solve for x: 3x + 5 = 17.",
    choices: ["3", "4", "5", "6"],
    answer: "4",
    explanation:
      "Subtract 5 from both sides: 3x = 12. Then divide by 3 to get x = 4."
  },
  {
    id: "M2",
    section: "Math",
    topic: "Algebra",
    difficulty: 2,
    type: "multiple-choice",
    question: "Which of the following is equivalent to 4(x - 2) + 3x?",
    choices: ["7x - 8", "x - 8", "7x + 8", "4x - 2"],
    answer: "7x - 8",
    explanation: "Distribute 4: 4x - 8. Then add 3x to get 7x - 8."
  },
  {
    id: "M3",
    section: "Math",
    topic: "Functions",
    difficulty: 2,
    type: "multiple-choice",
    question: "If f(x) = 2x + 1, what is f(4)?",
    choices: ["5", "7", "8", "9"],
    answer: "9",
    explanation: "f(4) = 2(4) + 1 = 9."
  },
  {
    id: "M4",
    section: "Math",
    topic: "Functions",
    difficulty: 3,
    type: "multiple-choice",
    question:
      "The graph of y = f(x) is shifted up by 3 units. Which equation represents the new function?",
    choices: ["y = f(x) + 3", "y = f(x) - 3", "y = f(x + 3)", "y = f(x - 3)"],
    answer: "y = f(x) + 3",
    explanation:
      "Adding a constant outside f(x) translates the graph vertically; +3 moves it up."
  },
  {
    id: "M5",
    section: "Math",
    topic: "Word Problems",
    difficulty: 2,
    type: "multiple-choice",
    question:
      "A gym charges a $20 sign-up fee and $15 per month. Which expression represents the total cost for m months?",
    choices: ["20m + 15", "15m + 20", "35m", "20m - 15"],
    answer: "15m + 20",
    explanation: "You pay 20 once and 15 per month: total cost = 15m + 20."
  },
  {
    id: "R1",
    section: "Reading",
    topic: "Reading - Main Idea",
    difficulty: 2,
    type: "multiple-choice",
    question:
      "A passage describes how asking simple questions led scientists to unexpected discoveries. Which choice best states the main idea?",
    choices: [
      "Simple questions rarely lead to useful discoveries.",
      "Curiosity and simple questions often drive major scientific breakthroughs.",
      "Only professional scientists are capable of important discoveries.",
      "Scientific discovery depends entirely on advanced technology."
    ],
    answer:
      "Curiosity and simple questions often drive major scientific breakthroughs.",
    explanation:
      "The focus is on curiosity and basic questions leading to important discoveries."
  },
  {
    id: "R2",
    section: "Reading",
    topic: "Reading - Inference",
    difficulty: 3,
    type: "multiple-choice",
    question:
      "The author notes that 'every failed experiment closes one wrong door.' It can reasonably be inferred that the author views failure as:",
    choices: [
      "Proof that the researcher is unqualified.",
      "A sign that further research is pointless.",
      "A necessary part of narrowing down correct ideas.",
      "Something that should be avoided at all costs."
    ],
    answer: "A necessary part of narrowing down correct ideas.",
    explanation:
      "Closing a 'wrong door' suggests progress toward the right answer, not pointless failure."
  },
  {
    id: "W1",
    section: "Writing",
    topic: "Writing - Punctuation",
    difficulty: 2,
    type: "multiple-choice",
    question:
      "Choose the best version of the underlined portion.\n\nMany students enjoy studying in coffee shops(1) however, others prefer the quiet of a library.\n\n(1)",
    choices: [
      "shops, however others",
      "shops; however, others",
      "shops however, others",
      "shops; however others"
    ],
    answer: "shops; however, others",
    explanation:
      "Two independent clauses are joined by 'however,' a conjunctive adverb; it should follow a semicolon and be followed by a comma."
  },
  {
    id: "W2",
    section: "Writing",
    topic: "Writing - Concision",
    difficulty: 2,
    type: "multiple-choice",
    question:
      "Choose the most concise version.\n\nThe reason why the experiment was unsuccessful was because the equipment was not calibrated.",
    choices: [
      "The experiment was unsuccessful because the equipment was not calibrated.",
      "The reason why the experiment was unsuccessful was because the equipment lacked calibration.",
      "Due to the fact that the equipment was not calibrated, the experiment was unsuccessful.",
      "The experiment, which was unsuccessful, was because the equipment was not calibrated."
    ],
    answer:
      "The experiment was unsuccessful because the equipment was not calibrated.",
    explanation:
      "This option is direct and avoids wordy phrases like 'the reason why' and 'due to the fact that.'"
  }
];

export default satQuestions;
export { satQuestions };
