import axios from "axios";
import { PalindromeResponse } from "../domain/palindrome";

export class LambdaAdapter {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async checkPalindrome(text: string): Promise<PalindromeResponse> {
    const response = await axios.post(this.baseUrl, { text });
    return response.data as PalindromeResponse;
  }
}
