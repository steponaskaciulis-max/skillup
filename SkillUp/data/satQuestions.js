// SkillUp/data/satQuestions.js

export const satQuestions = [
  // ========== MATH: ALGEBRA ==========
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
      "Subtract 5 from both sides: 3x = 12. Then divide by 3 to get x = 4.",
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
    explanation:
      "Distribute 4 to get 4x - 8, then add 3x: 4x - 8 + 3x = 7x - 8.",
  },

  // ========== MATH: FUNCTIONS ==========
  {
    id: "M3",
    section: "Math",
    topic: "Functions",
    difficulty: 2,
    type: "multiple-choice",
    question: "If f(x) = 2x + 1, what is f(4)?",
    choices: ["5", "7", "8", "9"],
    answer: "9",
    explanation: "f(4) = 2(4) + 1 = 8 + 1 = 9.",
  },
  {
    id: "M4",
    section: "Math",
    topic: "Functions",
    difficulty: 3,
    type: "multiple-choice",
    question:
      "The graph of y = f(x) is shifted up by 3 units. Which equation represents the new function?",
    choices: [
      "y = f(x) + 3",
      "y = f(x) - 3",
      "y = f(x + 3)",
      "y = f(x - 3)",
    ],
    answer: "y = f(x) + 3",
    explanation:
      "Adding a constant outside f(x) translates the graph vertically. +3 moves it up.",
  },

  // ========== MATH: WORD PROBLEMS ==========
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
    explanation:
      "There is a fixed fee of 20 plus 15 times the number of months: 15m + 20.",
  },

  // ========== READING: MAIN IDEA ==========
  {
    id: "R1",
    section: "Reading",
    topic: "Reading: Main Idea",
    difficulty: 2,
    type: "multiple-choice",
    passageId: "passage_1",
    question:
      "Which choice best states the main idea of the passage?",
    choices: [
      "The author describes a memorable childhood trip.",
      "The author argues that curiosity drives scientific discovery.",
      "The author explains why technology is harmful to society.",
      "The author narrates a conflict between friends.",
    ],
    answer: "The author argues that curiosity drives scientific discovery.",
    explanation:
      "Throughout the passage the author returns to how curiosity leads to new questions and breakthroughs, making that the central idea.",
  },

  // ========== READING: INFERENCE ==========
  {
    id: "R2",
    section: "Reading",
    topic: "Reading: Inference",
    difficulty: 3,
    type: "multiple-choice",
    passageId: "passage_1",
    question:
      "It can reasonably be inferred from the passage that the author views mistakes as:",
    choices: [
      "Unavoidable and useless.",
      "Embarrassing and harmful.",
      "Necessary steps in learning.",
      "Evidence of a lack of talent.",
    ],
    answer: "Necessary steps in learning.",
    explanation:
      "The author frames mistakes as chances to learn and revise ideas, suggesting they are necessary and productive.",
  },

  // ========== WRITING: PUNCTUATION ==========
  {
    id: "W1",
    section: "Writing",
    topic: "Writing: Punctuation",
    difficulty: 2,
    type: "multiple-choice",
    question:
      "Choose the best version of the underlined portion.\n\nMany students enjoy studying in coffee shops(1) however, others prefer the quiet of a library.\n\n(1)",
    choices: [
      "shops, however others",
      "shops; however, others",
      "shops however, others",
      "shops; however others",
    ],
    answer: "shops; however, others",
    explanation:
      '"However" is a conjunctive adverb joining two independent clauses, so it should follow a semicolon and be followed by a comma.',
  },

  // ========== WRITING: CONCISION ==========
  {
    id: "W2",
    section: "Writing",
    topic: "Writing: Concision",
    difficulty: 2,
    type: "multiple-choice",
    question:
      "Choose the most concise version.\n\nThe reason why the experiment was unsuccessful was because the equipment was not calibrated.",
    choices: [
      "The experiment was unsuccessful because the equipment was not calibrated.",
      "The reason why the experiment was unsuccessful was because the equipment lacked calibration.",
      "Due to the fact that the equipment was not calibrated, the experiment was unsuccessful.",
      "The experiment, which was unsuccessful, was because the equipment was not calibrated.",
    ],
    answer:
      "The experiment was unsuccessful because the equipment was not calibrated.",
    explanation:
      "This option is clear and avoids wordiness like 'the reason why' and 'due to the fact that.'",
  },
];
