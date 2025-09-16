function cleanText(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function isPalindrome(str) {
  const cleaned = cleanText(str);
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

function checkPalindrome() {
  const input = document.getElementById('text-input').value;

  if (!input.trim()) {
    alert('Please input a value');
    return;
  }

  const resultEl = document.getElementById('result');
  if (isPalindrome(input)) {
    resultEl.textContent = `${input} is a palindrome.`;
  } else {
    resultEl.textContent = `${input} is not a palindrome.`;
  }
}

document.getElementById('check-btn').addEventListener('click', checkPalindrome);