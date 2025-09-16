import "dotenv/config";
import clear from "clear";
import chalk from "chalk";
import boxen from "boxen";
import { runPalindromeCommand } from "./commands/palindromeCommand";

clear();

console.log(
  boxen(
    chalk.bold.blue("🔍 Palindrome CLI") +
      "\n\n" +
      "¡Bienvenido!\n" +
      "Puedes ingresar un texto y comprobar si es un palíndromo.",
    { padding: 1, margin: 0, borderStyle: "round", borderColor: "blue" }
  )
);

runPalindromeCommand();
