let textDays = document.querySelector("#days");
let textHours = document.querySelector("#hours");
let textMinutes = document.querySelector("#minutes");
let textSeconds = document.querySelector("#seconds");

let tripDate = new Date("2021-12-15T00:00:00").getTime();
// let tripDate = new Date("2021-11-09T15:51:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let timeDifference = tripDate - now;
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //   document.getElementById("countdown").innerHTML =
  //     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  textDays.innerHTML = days;
  textHours.innerHTML = hours;
  textMinutes.innerHTML = minutes;
  textSeconds.innerHTML = seconds;

  //   If the count down is finished, write some text
  if (timeDifference < 0) {
    clearInterval(x);
    textDays.innerHTML = 0;
    textHours.innerHTML = 0;
    textMinutes.innerHTML = 0;
    textSeconds.innerHTML = 0;
    document.getElementById("message").innerHTML =
      "What are you still looking at this page for!? It's time to go!";
  }
}, 1000);
