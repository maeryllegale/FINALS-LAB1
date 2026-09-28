var startBtn = document.getElementById("startBtn");
var resultPanel = document.getElementById("resultPanel");

function runProgram() {
  alert("Welcome to our Score Evaluator");

  // Input a name
  var name = prompt("Please enter your name:");

  if (name == null || name == "") {
    alert("No name entered. Please try again.");
    return;
  }

  // Input a score
  var score = prompt("Please enter your score (0-100):");

  if (score == null || score == "") {
    alert("No score entered. Program cancelled.");
    return;
  }

  // Ask if the user wants to continue
  var wantsToContinue = confirm("Hello " + name + ", do you want to continue?");

  if (wantsToContinue == false) {
    alert("Okay, maybe next time.");
    return;
  }

  // Convert score from text to number
  var numScore = Number(score);
  var remark = "";

  // Check the score
  if (isNaN(numScore)) {
    remark = "Invalid";
    note = "The score must be a number.";
  } else if (numScore < 0) {
    remark = "Invalid";
    note = "Score cannot be negative.";
  } else if (numScore == 0) {
    remark = "Invalid";
    note = "Score cannot be zero.";
  } else if (numScore > 100) {
    remark = "Invalid";
    note = "Score cannot be higher than 100.";
  } else if (numScore >= 90) {
    remark = "Excellent";
    note = name + " got an Excellent score!";
  } else if (numScore >= 75) {
    remark = "Passed";
    note = "PASSED";
  } else {
    remark = "Failed";
    note = "FAILED";
  }

  // Display the result
  document.getElementById("outName").innerHTML = name;
  document.getElementById("outScore").innerHTML = numScore;
  document.getElementById("remarkText").innerHTML = remark;

  // Update the result panel
  document.getElementById("resultPanel").innerHTML = resultPanel.innerHTML =
    "<p class='remark " + remark.toLowerCase() + "'>" + note + "</p>";
}

// Connect the button to the program
document.getElementById("startBtn").addEventListener("click", runProgram);
