function handleCheckPalindrome(e) {
  e.preventDefault();
  const inputField = document.getElementById("text-input");
  const inputValue = inputField.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (!inputValue.trim()) {
    alert("Please input a value");
    return;
  }

  let start = 0;
  let end = inputValue.length - 1;
  let isPalindrome = true;

  while (start <= end) {
    if (inputValue[start++] !== inputValue[end--]) {
      isPalindrome = false;
      break;
    }
  }

  console.log(isPalindrome);

  if (isPalindrome == true) {
    document.getElementById(
      "result"
    ).innerText = `${inputValue} is a palindrome`;
  } else {
    document.getElementById(
      "result"
    ).innerText = `${inputValue} is not a palindrome`;
  }
  inputField.value = "";
}
