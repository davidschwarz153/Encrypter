let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }

];

const input = document.querySelector<HTMLInputElement>("#input");
const button = document.querySelector<HTMLButtonElement>("#button");
const output = document.querySelector<HTMLDivElement>("#output");
const loadingAnimation = document.querySelector<HTMLDivElement>("#loading-animation");
const dots = document.querySelector<HTMLSpanElement>("#dots");


button?.addEventListener("click", () => {
    function encrypt(text: string) {
        let morseCode = "";
        const totalChars = text.length;
        let processedChars = 0;

        loadingAnimation!.style.display = "inline-block";

        setTimeout(() => {
            for (let i = 0; i < text.length; i++) {
                const char = text[i].toUpperCase();
                const found = morseAlphabet.find((item) => item.letter === char);
                if (found) {
                    morseCode += found.morseCode + " ";
                } else {
                    morseCode += " ";
                }

                processedChars++;
            }

            output!.textContent = morseCode.trim();
            setTimeout(() => {
                loadingAnimation!.style.display = "none"; 
            }, 500); 
        }, 5000); 
    }

    const textToEncrypt = input?.value || "";
    encrypt(textToEncrypt);
});

