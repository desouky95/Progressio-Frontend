import "./countdown.scss";

let time = 10;

function handleTimeChange(e: Event) {
    
  const target = e.target as HTMLInputElement;
  time = Number(target.value);
  console.log(time);
}
const timeInput = document.getElementById("count-down-number");
if (timeInput) {
  timeInput.addEventListener("change", handleTimeChange);
}
