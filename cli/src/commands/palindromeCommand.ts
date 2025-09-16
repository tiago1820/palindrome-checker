import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";
import { PalindromeService } from "../services/palindromeService";
import { LambdaAdapter } from "../adapters/lambdaAdapter";

export async function runPalindromeCommand() {
  const { text } = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "👉 Ingresa el texto a verificar:",
    },
  ]);

  const adapter = new LambdaAdapter(process.env.LAMBDA_URL || "");
  const service = new PalindromeService(adapter);

  try {
    const response = await service.execute(text);

    const message =
      response.result === "is a palindrome"
        ? chalk.green.bold(`✅ "${response.text}" ES un palíndromo`)
        : chalk.red.bold(`❌ "${response.text}" NO es un palíndromo`);

    console.log(
      boxen(message, {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: response.result === "is a palindrome" ? "green" : "red",
      })
    );
  } catch (error) {
    console.error(chalk.red("❌ Error al verificar el palíndromo."));
  }
}
