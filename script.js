function runProgram() {

    alert("Welcome to our Score Evaluator");

    // Input a name
    var name = prompt("Please enter your name:");

    if (name == null || name == "") {
        alert("No name entered. Program cancelled.");
        return;
    }

    // Input a score
    var score = prompt("Please enter your score (0-100):");

    if (score == null || score == "") {
        alert("No score entered. Program cancelled.");
        return;
    }

    // Ask if the user wants to continue
    var wantsToContinue = confirm(
        "Hello " + name + ", do you want to continue?"
    );

    if (wantsToContinue == false) {
        alert("Okay, maybe next time.");
        return;
    }

    // Convert score from text to number
    var numScore = Number(score);

    var remark = "";

    // Check the score
    if (isNaN(numScore) || numScore < 0 || numScore > 100) {
        remark = "Invalid score";
    }
    else if (numScore >= 90) {
        remark = "Excellent";
    }
    else if (numScore >= 75) {
        remark = "Passed";
    }
    else {
        remark = "Failed";
    }

    // Display the result
    document.getElementById("outName").innerHTML = name;
    document.getElementById("outScore").innerHTML = numScore;
    document.getElementById("remarkText").innerHTML = remark;

    // Update the result panel
    document.getElementById("resultPanel").innerHTML =
        "<p class='placeholder'>Result calculated successfully!</p>";
}

// Connect the button to the program
document.getElementById("startBtn").addEventListener("click", runProgram);