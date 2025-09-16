import { PalindromePort } from "../ports/palindromePort";

export class PalindromeService implements PalindromePort {
  execute(text: string): boolean {
    const cleaned = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
  }
}
