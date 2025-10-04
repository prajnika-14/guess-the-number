let randomNumber, lower, upper, tries, score = 0;

function startGame() {
  lower = parseInt(document.getElementById("lower").value);
  upper = parseInt(document.getElementById("upper").value);

  if (isNaN(lower) || isNaN(upper) || lower >= upper) {
    alert("Please enter a valid range!");
    return;
  }

  randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  tries = 3;

  document.getElementById("range-inputs").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("retry").style.display = "none";
  document.getElementById("message").innerText = `Guess a number between ${lower} and ${upper}`;
  document.getElementById("message").style.color = "#222"; // default text color
  document.getElementById("guess").value = "";
}

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  if (isNaN(guess)) {
    alert("Enter a number!");
    return;
  }

  if (guess === randomNumber) {
    // Correct guess message
    document.getElementById("message").innerText = `🎉 Yay! You got it! The number was ${randomNumber}`;
    document.getElementById("message").style.color = "green";
    score++;
    // Wait a tiny moment so user sees the message before showing retry
    setTimeout(() => endRound(), 1000);
  } else {
    tries--;
    document.getElementById("message").style.color = "#222"; // normal color
    if (tries > 0) {
      if (guess > randomNumber) {
        document.getElementById("message").innerText = `Your guess was High! Tries left: ${tries}`;
      } else {
        document.getElementById("message").innerText = `Your guess was Low! Tries left: ${tries}`;
      }
    } else {
      // Out of tries message
      document.getElementById("message").innerText = `❌ Out of tries! The number was ${randomNumber}`;
      setTimeout(() => endRound(), 1000);
    }
  }
}

function endRound() {
  document.getElementById("score").innerText = `Score: ${score}`;
  document.getElementById("game").style.display = "none";
  document.getElementById("retry").style.display = "block";
}

function endGame() {
  document.getElementById("retry").style.display = "none";
  document.getElementById("range-inputs").style.display = "block";
  score = 0;
  document.getElementById("score").innerText = `Score: 0`;
}
