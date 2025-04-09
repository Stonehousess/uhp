const questions = [
  {
    question: "Do all transgender patients transition?",
    answer: "No",
    explanation: `Not all transgender patients seek medical or surgical transition. Some may only socially transition, while others may not transition at all due to financial, medical, or personal reasons.`,
    takeaway: ["Transition is an individual experience based on identity and comfort."]
  },
  {
    question: "Do all transgender patients present as their gender?",
    answer: "No",
    explanation: `Presentation can vary due to social pressures, safety concerns, or workplace expectations. Identity remains constant regardless of outward appearance.`,
    takeaway: ["Healthcare should reflect gender identity — not presentation."]
  },
  {
    question: "Is hormone treatment required for a transgender identity to be recognized?",
    answer: "No",
    explanation: `Hormones are a personal decision and not a requirement. Some people choose not to take hormones for health or personal reasons.`,
    takeaway: ["Gender identity is valid without medical intervention."]
  },
  {
    question: "Should transgender patients be required to disclose birth-assigned gender for care?",
    answer: "No",
    explanation: `Disclosure can be distressing and isn't always medically necessary. It should be approached sensitively, only when essential for treatment.`,
    takeaway: ["Care should be based on identity and current medical needs."]
  },
  {
    question: "Do transgender patients have a biological male or female anatomy?",
    answer: "It depends",
    explanation: `Anatomy varies widely due to hormones, surgery, and natural variation. Making assumptions based on identity is misleading.`,
    takeaway: ["Focus on individual anatomy and self-identified gender."]
  },
  {
    question: "Can transgender patients access hormone therapy privately?",
    answer: "Yes",
    explanation: `Many seek private care to avoid NHS delays or restrictions. Integration with NHS systems is still important for safe continuity.`,
    takeaway: ["Hormone access is a personal medical decision."]
  },
  {
    question: "Is being transgender classified as a mental health issue?",
    answer: "No",
    explanation: `WHO no longer classifies it as a disorder. It's a sexual health variation, not a psychiatric diagnosis.`,
    takeaway: ["Care should reflect up-to-date international health standards."]
  },
  {
    question: "Do non-transgender people transition?",
    answer: "Yes",
    explanation: `Hormones are used for menopause, fertility, and other conditions — transition isn’t exclusive to transgender patients.`,
    takeaway: ["Hormone use is a broad medical practice."]
  },
  {
    question: "Should transgender patients' records be kept private?",
    answer: "Yes",
    explanation: `Trans patients have equal rights to confidentiality. Disclosure can be harmful and illegal under GDPR and NHS policy.`,
    takeaway: ["Confidentiality is a universal right."]
  },
  {
    question: "Can staff refuse to treat transgender patients based on belief?",
    answer: "No",
    explanation: `Personal beliefs do not override patient rights. NHS and legal guidelines require equal care for all patients.`,
    takeaway: ["Professional standards come before personal views."]
  }
];

let current = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  ["Yes", "No", "It depends"].forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => showAnswer(opt, q);
    optionsBox.appendChild(btn);
  });

  document.getElementById("question-box").classList.remove("hidden");
  document.getElementById("feedback-box").classList.add("hidden");
  document.getElementById("completion-box").classList.add("hidden");
}

function showAnswer(selected, q) {
  document.getElementById("question-box").classList.add("hidden");
  document.getElementById("feedback-box").classList.remove("hidden");

  const correct = selected === q.answer;
  document.getElementById("answer").textContent = `Answer: ${q.answer}`;
  document.getElementById("explanation").textContent = q.explanation;

  const ul = document.getElementById("takeaway");
  ul.innerHTML = "";
  q.takeaway.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("feedback-box").classList.add("hidden");
    document.getElementById("completion-box").classList.remove("hidden");
  }
}

window.onload = showQuestion;