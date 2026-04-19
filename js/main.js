const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];

let output = "";
//Define fuction to calculate based on button ckicked
const calclate = (btnValue) => {
  // factorial
  const factorial = (n) => {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    let res = 1;
    for (let i; i <= n; i++) {
      res *= i;
    }
    return res;
  };

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

const calclate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    try {
      const transformed = transformExpression(output);
      output = eval(transformed).toString();
    } catch {
      output = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calclate(e.target.dataset.value));
});
