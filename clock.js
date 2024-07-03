function getClock() {
const date = new Date();
const hh = date.getHours();
const mm = date.getMinutes();
const ss = date.getSeconds();
const hours = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('secuntes');
//Coded By RevonStudio Official
hours.innerHTML = `${hh}`;
minutes.innerHTML = `${mm}`;
seconds.innerHTML = `${ss}`;
}
setInterval(getClock, );