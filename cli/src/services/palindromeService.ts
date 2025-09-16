import { LambdaAdapter } from "../adapters/lambdaAdapter";
import { PalindromeResponse } from "../domain/palindrome";

export class PalindromeService {
  private adapter: LambdaAdapter;

  constructor(adapter: LambdaAdapter) {
    this.adapter = adapter;
  }

  async execute(text: string): Promise<PalindromeResponse> {
    return await this.adapter.checkPalindrome(text);
  }
}
