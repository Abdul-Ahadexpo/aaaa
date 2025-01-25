// Wait until the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  const cipher = {
    A: "∫",
    B: "υ",
    C: "⊂",
    D: "⊃",
    E: "∤",
    F: "∥",
    G: "7",
    H: "Π",
    I: "Γ",
    J: "∂",
    K: "∪",
    L: "∠",
    M: "⊡",
    N: "□",
    O: "⨞",
    P: "⌒",
    Q: "∩",
    R: "ς",
    S: ">",
    T: "∨",
    U: "<",
    V: "Λ",
    W: "≅",
    X: "⋇",
    Y: "⟃",
    Z: "⟐",
  };

  // Reverse the cipher to create a "symbols-to-text" map
  const reverseCipher = {};
  for (const [key, value] of Object.entries(cipher)) {
    reverseCipher[value] = key;
  }

  function convertToSymbols() {
    const inputText = document.getElementById("inputText").value.toUpperCase();
    let outputText = "";
    for (const char of inputText) {
      if (char === " ") {
        outputText += "-- "; // Replace spaces with an underscore
      } else if (cipher[char]) {
        outputText += cipher[char] + " ";
      } else {
        outputText += char + " "; // Keep characters that are not in the cipher
      }
    }
    document.getElementById("outputText").innerText = outputText.trim();
    showCopyButton(); // Show the copy button when there's output
  }

  function convertToText() {
    const inputText = document.getElementById("inputText").value.split(" "); // Split by spaces
    let outputText = "";
    for (const symbol of inputText) {
      if (symbol === "--") {
        outputText += " "; // Replace underscores with spaces
      } else if (reverseCipher[symbol]) {
        outputText += reverseCipher[symbol];
      } else {
        outputText += symbol; // Keep characters that are not in the reverse cipher
      }
    }
    document.getElementById("outputText").innerText = outputText
      .trim()
      .toLowerCase(); // Convert to lowercase
    showCopyButton(); // Show the copy button when there's output
  }

  function showCopyButton() {
    document.getElementById("copyBtn").classList.remove("hidden"); // Show the copy button
  }

  // Copy functionality
  document.getElementById("copyBtn").addEventListener("click", function () {
    const outputText = document.getElementById("outputText").innerText;
    navigator.clipboard
      .writeText(outputText)
      .then(function () {
        Swal.fire({
          title: "Success!",
          text: "Text copied to clipboard!",
          icon: "success",
          confirmButtonText: "OK",
          timer: 1000,
          timerProgressBar: true,
        });
      })
      .catch(function (err) {
        Swal.fire({
          title: "Error!",
          text: "Failed to copy text: " + err,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  });

  // Make the convert buttons functional
  document
    .querySelector(".btn-primary")
    .addEventListener("click", convertToSymbols);
  document
    .querySelector(".btn-secondary")
    .addEventListener("click", convertToText);

  // Auto-conversion on typing
  document
    .getElementById("inputText")
    .addEventListener("input", convertToSymbols);
});

function clearTextarea() {
  document.getElementById("inputText").value = "";
}
