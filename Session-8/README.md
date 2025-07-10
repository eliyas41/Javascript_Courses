# 🧒 JavaScript for Kids - Session 8: Mini Projects

🎓 Congratulations on reaching **Session 8**!

You’ve learned a LOT:

- How to use variables
- How to write conditions
- How to create functions
- How to loop through data
- How to organize info with arrays and objects

Now it's time to build **real mini-projects** using all these tools!

Each project below will help you **practice**, **experiment**, and **create**.

---

## 💡 Project 1: Quiz Game

🎯 What you’ll build:
A quiz that asks the user 3 questions and scores them.

```js
let score = 0;

function askQuestion(question, correctAnswer) {
  let answer = prompt(question); // Ask the user
  if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("✅ Correct!");
    score++;
  } else {
    console.log("❌ Wrong. The correct answer is " + correctAnswer);
  }
}

askQuestion("What is the capital of Ethiopia?", "Addis Ababa");
askQuestion("2 + 2 equals?", "4");
askQuestion("What color is the sun?", "yellow");

console.log("Your final score is: " + score + "/3");
```
