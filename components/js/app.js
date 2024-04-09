const morseCodeMap = {
  Á: ".-",
  Ã: ".-",
  Â: ".-",
  À: ".-",

  É: ".",
  Ê: ".",
  È: ".",

  Í: "..",
  Ì: "..",
  Î: "..",

  Ó: "---",
  Ô: "---",
  Ò: "---",
  Õ: "---",

  Ú: "..-",
  Ù: "..-",
  Û: "..-",
  Ü: "..-",

  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  
  " ": "/",
  "?": "..--..",
  "!": "-.-.--",
  ".": ".-.-.-",
  ",": "--..--",
  ";": "-.-.-.",
  ":": "---...",
  "+": ".-.-.",
  "-": "-....-",
  "=": "-...-",
};

function textToMorse(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      if (morseCodeMap[char]) {
        return morseCodeMap[char];
      } else {
        return char;
      }
    })
    .join(" ");
}

function morseToText(morse) {
  return morse
    .split(" ")
    .map((code) => {
      for (let char in morseCodeMap) {
        if (morseCodeMap[char] === code) {
          return char;
        }
      }
      return code;
    })
    .join("");
}

function convertToMorse() {
  const inputText = document.getElementById("inputText").value;
  const morse = textToMorse(inputText);
  document.getElementById("inputMorse").value = morse;
}

function convertToText() {
  const inputMorse = document.getElementById("inputMorse").value;
  const text = morseToText(inputMorse);
  document.getElementById("output").textContent = `${text}`;
}

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    convertToMorse();
  }
});
