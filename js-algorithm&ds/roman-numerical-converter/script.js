document.getElementById("convert-btn").addEventListener("click", () => {
  const input = document.getElementById("number").value.trim();
  const output = document.getElementById("output");
  output.className = ""; // Reset classes

  if (!input) {
    output.textContent = "Please enter a valid number";
    output.classList.add("error");
    return;
  }

  if (!/^-?\d+$/.test(input)) {
    output.textContent = "Please enter a valid number";
    output.classList.add("error");
    return;
  }

  const num = parseInt(input, 10);

  if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.classList.add("error");
    return;
  }

  if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.classList.add("error");
    return;
  }

  output.textContent = convertToRoman(num);
});

function convertToRoman(num) {
  const romanNumerals = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  for (const [value, symbol] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}
