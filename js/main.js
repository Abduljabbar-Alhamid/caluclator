const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
//Define fuction to calculate based on button ckicked
const calclate = (btnValue) => {
  // factorial 
  const factorial = (n) => {
    if(n< 0) return NaN;
    if(n===0)return 1;
    let res = 1; 
    for(let i; i <= n; i++)
    {
      res *= i;

    }
    return res;
  }

  const transformExpression = (expr) => {
    return (
      expr
        // constants
        .replace(/π/g, "Math.PI")
        .replace(/\be\b/g, "Math.E")

        // sqrt
        .replace(/√\((.*?)\)/g, "Math.sqrt($1)")

        // power x^y
        .replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)")

        // square
        .replace(/(\d+)²/g, "Math.pow($1,2)")

        // log
        .replace(/log\((.*?)\)/g, "Math.log10($1)")

        // ln
        .replace(/ln\((.*?)\)/g, "Math.log($1)")

        // abs
        .replace(/\|(.*?)\|/g, "Math.abs($1)")

        // exp
        .replace(/exp\((.*?)\)/g, "Math.exp($1)")

        // factorial
        .replace(/(\d+)!/g, "factorial($1)")

        // percentage
        .replace(/%/g, "/100")
    );
  };

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
