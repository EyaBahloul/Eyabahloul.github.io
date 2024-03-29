function eval()
{
    let name = document.getElementById("name").value;
    let love = document.getElementById("love").value;
    let better = document.getElementById("me").value;

    if (name.toLowerCase() != "eya wali" && name.toLowerCase() != "eya bahloul")
    {
        alert("wrong name");
        return false;
    }
    if (name.toLowerCase() == "eya wali")
    {
        alert("Do you mean Eya Bahloul?");
        return false;
    }
    if (love != 3000)
    {
        alert("i don't love you that many!!");
        return false;
    }

    if (better != "adam bahloul")
    {
        alert("adam bahloul is better in chess bitch");
        return false;
    }
    alert("congrats!!");
    return true;
}


// Set the date to countdown to (YYYY-MM-DD format)
const countdownDate = new Date("2024-03-31").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the difference between now and the countdown date
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the "countdown" element
  document.getElementById("countdown").innerHTML = "Come back for a letter in : " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  // If the countdown is over, display a message and stop the countdown
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000); // Update every second (1000 milliseconds)