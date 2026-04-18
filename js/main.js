const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
//Define fuction to calculate based on button ckicked
const calclate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //If out has '%', replace with '/100' before evaluating.
    output = eval(output.replace("%", "100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") output = output.toString().slice(0, -1);
  else {
    // if output is empty and button is specialchars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
//add event listener to buttons, call calculate() on click
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset valueas argument
  button.addEventListener("click", (e) => calclate(e.target.dataset.value));
});
