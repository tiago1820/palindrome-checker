import { APIGatewayProxyHandler } from "aws-lambda";
import { PalindromeService } from "../domain/palindromeService";

const service = new PalindromeService();

export const handler: APIGatewayProxyHandler = async (event) => {
  const { text } = JSON.parse(event.body || "{}");

  if (!text || !text.trim()) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please input a value" }),
    };
  }

  const isPalindrome = service.execute(text);

  return {
    statusCode: 200,
    body: JSON.stringify({
      text,
      result: isPalindrome ? "is a palindrome" : "is not a palindrome",
    }),
  };
};
