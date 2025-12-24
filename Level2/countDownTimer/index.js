// const time  = new Date();
// console.log(time);

const days = document.getElementById("Days");
const hours = document.getElementById("Hours");
const mins = document.getElementById("Minutes");
const seconds = document.getElementById("seconds");


 function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }


const updateCountDown = (targetDate) => {
  const currentTime = new Date();
  const timeDifference = targetDate - currentTime;

  // calculating days, minutes, hours, seconds from timeDiffrence
  let calculateSeconds = Math.floor(timeDifference / 1000) % 60;

  let calMinutes = Math.floor(timeDifference / 1000 / 60) % 60;
  let calHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;

  let calDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

  days.textContent = formatTime(calDays);
  hours.textContent = formatTime(calHours);
  mins.textContent = formatTime(calMinutes);
  seconds.textContent = formatTime(calculateSeconds);

 

}

const countDown = (targetDate) => {
  setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date("january 01 2026 08:00");
// console.log(timeT);

countDown(targetDate);
