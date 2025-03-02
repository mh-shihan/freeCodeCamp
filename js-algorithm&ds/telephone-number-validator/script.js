document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultsDiv = document.getElementById("results-div");

  checkBtn.addEventListener("click", () => {
    const input = userInput.value.trim();
    if (!input) {
      alert("Please provide a phone number");
      return;
    }

    const isValid = validatePhoneNumber(input);
    resultsDiv.innerHTML = `<div class="${isValid ? "valid" : "invalid"}">${
      isValid ? "Valid" : "Invalid"
    } US number: ${input}</div>`;
  });

  clearBtn.addEventListener("click", () => {
    resultsDiv.innerHTML = "";
  });
});

function validatePhoneNumber(number) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  return regex.test(number);
}
