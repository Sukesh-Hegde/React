import java.util.Scanner;

public class PalindromeChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter a string
        System.out.print("Enter a string to check if it's a palindrome: ");
        String userInput = scanner.nextLine();

        // Check if the input is a palindrome
        if (isPalindrome(userInput)) {
            System.out.println("\"" + userInput + "\" is a palindrome.");
        } else {
            System.out.println("\"" + userInput + "\" is not a palindrome.");
        }

        // Close the scanner
        scanner.close();
    }

    public static boolean isPalindrome(String str) {
        if (str.length() <= 1) {
            return true;
        }

        if (Character.toLowerCase(str.charAt(0)) != Character.toLowerCase(str.charAt(str.length() - 1))) {
            return false;
        }

        return isPalindrome(str.substring(1, str.length() - 1));
    }
}
