// Cipher mapping for character encoding/decoding
export const cipher = {
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

// Reverse cipher for decoding
export const reverseCipher = Object.entries(cipher).reduce(
  (acc, [key, value]) => {
    acc[value] = key;
    return acc;
  },
  {} as Record<string, string>
);

// Convert standard text to Nioga format
export const convertToSymbols = (text: string): string => {
  const inputText = text.toUpperCase();
  let outputText = "";
  
  for (const char of inputText) {
    if (char === " ") {
      outputText += "-- ";
    } else if (cipher[char as keyof typeof cipher]) {
      outputText += cipher[char as keyof typeof cipher] + " ";
    } else {
      outputText += char + " ";
    }
  }
  
  return outputText.trim();
};

// Convert Nioga format back to standard text
export const convertToText = (text: string): string => {
  const inputText = text.split(" ");
  let outputText = "";
  
  for (const symbol of inputText) {
    if (symbol === "--") {
      outputText += " ";
    } else if (reverseCipher[symbol]) {
      outputText += reverseCipher[symbol];
    } else {
      outputText += symbol;
    }
  }
  
  return outputText.toLowerCase();
};