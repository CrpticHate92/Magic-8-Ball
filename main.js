// Magic 8 Ball

// Button Event Listener
document.getElementById("8-Ball-Button").addEventListener("click", ballBtn);

let output = document.getElementById("answer-output");
// Function
function ballBtn() {
  let ballRand = Math.random();
  console.log(ballRand);
  let input = document.getElementById("input").value.toLowerCase();
  // Response
  console.log(input);
  if (input == "") {
    output.innerHTML = "Please Enter a Question.";
  } else if (input == "does this magic 8 ball work") {
    output.innerHTML = "Yes it does.";
  } else if (input == "is java awesome") {
    output.innerHTML = "Of Course.";
  } else if (input == "is school fun") {
    output.innerHTML = "Why such a silly question, and yes.";
  } else if (input == "will the oilers win the playoffs") {
    output.innerHTML = "YESSIR.";
  } else if (ballRand < 0.2) {
    output.innerHTML = "Without a Doubt.";
  } else if (ballRand < 0.4) {
    output.innerHTML = "As I see it, yes.";
  } else if (ballRand < 0.6) {
    output.innerHTML = "Concentrate and ask again.";
  } else if (ballRand < 0.8) {
    output.innerHTML = "Don't count on it.";
  } else {
    output.innerHTML = "Outlook not so good.";
  }
}
