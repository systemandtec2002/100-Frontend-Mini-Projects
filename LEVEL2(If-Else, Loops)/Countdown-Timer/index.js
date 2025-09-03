
const endDate = new Date("September 6, 2025 23:00:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
  const now = new Date().getTime();
  const distanceCovered = now - startDate;
  const distancePending = endDate - now;

  if (distancePending < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = "🎉 EXPIRED";
    document.getElementById('progress-bar').style.width = "100%";
    return;
  }

  const oneDayInMillies = 24 * 60 * 60 * 1000;
  const oneHourInMillies = 60 * 60 * 1000;
  const oneMinInMillies = 60 * 1000;
  const oneSecondInMillies = 1000;

  const days = Math.floor(distancePending / oneDayInMillies);
  const hrs = Math.floor((distancePending % oneDayInMillies) / oneHourInMillies);
  const mins = Math.floor((distancePending % oneHourInMillies) / oneMinInMillies);
  const secs = Math.floor((distancePending % oneMinInMillies) / oneSecondInMillies);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = mins;
  document.getElementById('seconds').innerHTML = secs;

  const totalDistance = endDate - startDate;
  const percentageDistance = (distanceCovered / totalDistance) * 100;
  document.getElementById('progress-bar').style.width = percentageDistance + "%";
}, 1000);
