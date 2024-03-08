// let search = document.getElementById("searchbar");

// search.addEventListener("submit", () => {
//   let query = search.value;
//   let url = `https://www.google.com/search?q=${query}`;
//   let res = fetch(url);
//   console.log("hi");
// });

const date = new Date();
let day = document.getElementById("day");
let time = document.getElementById("time");
let setDay = "";

window.addEventListener("load", () => {
  let currentDay = date.getDay();
  convertDay(currentDay);
  day.innerText = setDay;
  dayTime();
});

function dayTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  time.innerText = hours + " : " + digit(minutes);
  setTimeout(dayTime, 1000);
}

function digit(d) {
  return d < 10 ? "0" + d.toString() : d.toString();
}

function convertDay(currentDay) {
  switch (currentDay) {
    case 1:
      setDay = "MONDAY";
      break;

    case 2:
      setDay = "TUESDAY";
      break;

    case 3:
      setDay = "WEDNESDAY";
      break;

    case 4:
      setDay = "THURSDAY";
      break;

    case 5:
      setDay = "FRIDAY";
      break;

    case 6:
      setDay = "SATURDAY";

    case 7:
      setDay = "SUNDAY";
  }
}
