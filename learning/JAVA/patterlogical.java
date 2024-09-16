// import java.util.Scanner;

// public class PalindromeChecker {
// public static void main(String[] args) {
//     Scanner scanner = new Scanner(System.in);
//     // Input a string
//     System.out.print("Enter a string: ");
//     String input = scanner.nextLine();
//     // Check if the string is a palindrome
//     if (isPalindrome(input)) {
//         System.out.println("\"" + input + "\" is a palindrome.");
//     } else {
//         System.out.println("\"" + input + "\" is not a palindrome.");
//     }
//     scanner.close();
// }

// public static boolean isPalindrome(String str) {
//     // Remove spaces and convert to lowercase for accurate comparison
//     String cleanedStr = str.replaceAll("\\s+", "").toLowerCase();
//     int left = 0;
//     int right = cleanedStr.length() - 1;
//     while (left < right) {
//         if (cleanedStr.charAt(left) != cleanedStr.charAt(right)) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// }



//!2Q factorial
// public class FactorialCalculator {
//     public static int factorial(int num) {
//         int fact = 1;
//         for (int i = 1; i <= num; i++) {
//             fact = fact * i;
//         }
//         return fact;
//     }
//     public static void main(String[] args) {
//         Scanner scnr = new Scanner(System.in);
//         System.out.print("Enter a number: ");
//         int num = scnr.nextInt();
//         System.out.println(factorial(num));
//     }
// }
//!3 ArmstrongNumber
// public class ArmstrongNumberChecker {
//     public static boolean isArmstrong(int num) {
//         int numCopy = num;
//         int tempAms = 0; // Variable to store the sum of powers of digits
//         int pow = 0;
//         while (num > 0) {
//             pow++;
//             num /= 10;
//         }
//         // Loop through each digit of the number
//         while (num > 0) {
//             int ld = num % 10; // Get the last digit
//             tempAms += Math.pow(ld, pow); // Add the power of the digit to tempAms
//             num /= 10; // Remove the last digit
//         }
//         // Check if the sum of powers of digits equals the original number
//         return tempAms == numCopy;
//     }
//     public static void main(String[] args) {
//         Scanner scnr = new Scanner(System.in);
//         System.out.print("Enter a number: ");
//         int num = scnr.nextInt();
//         int pow = 3;
//         if (isArmstrong(num, pow)) {
//             System.out.println(num + " is an Armstrong number.");
//         } else {
//             System.out.println(num + " is not an Armstrong number.");
//         }
//     }
// }
// import java.util.Scanner;
// public class ArmstrongNumberChecker {
//     public static boolean isArmstrong(int num) {
//         int numCopy = num;
//         int temp = 0;
//         int pow = 0;
//         int tempNum = num;
//         while (tempNum > 0) {
//             pow++;
//             tempNum /= 10;
//         }
//         tempNum = num;
//         while (tempNum > 0) {
//             int ld = tempNum % 10; // Get the last digit
//             temp += Math.pow(ld, pow); // Add the power of the digit to tempAms
//             tempNum /= 10; // Remove the last digit
//         }
//         // Check if the sum of powers of digits equals the original number
//         return temp == numCopy;
//     }
//     public static void main(String[] args) {
//         Scanner scnr = new Scanner(System.in);
//         System.out.print("Enter a number: ");
//         int num = scnr.nextInt();
//         if (isArmstrong(num)) {
//             System.out.println(num + " is an Armstrong number.");
//         } else {
//             System.out.println(num + " is not an Armstrong number.");
//         }
//     }
// }






// ! prime 
// import java.util.Scanner;

// public class primaryNo {

//     public static boolean isPrime(int num) {
//         if (num <= 1) {
//             return false;
//         }
//         if (num == 2 || num == 3) {
//             return true;
//         }
//         if (num % 2 == 0 || num % 3 == 0) {
//             return false;
//         }
//         for (int i = 5; i * i <= num; i += 6) {
//             if (num % i == 0 || num % (i + 2) == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     public static void main(String[] args) {
//         Scanner scnr = new Scanner(System.in);
//         System.out.print("Enter a number: ");
//         int num = scnr.nextInt();
//         scnr.close();
        
//         if (isPrime(num)) {
//             System.out.println(num + " is a prime number.");
//         } else {
//             System.out.println(num + " is not a prime number.");
//         }
//     }
// }



//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
// import java.util.*;
// public class java3 {
//     public static void main(String[] args) {
//         int num = 5;
//         for (int i = 0; i <= num; i++) {
//             for (int j = num; j > i; j--) {
//                 System.out.print("  ");
//             }
//             for (int j = 0; j < i; j++) {
//                 System.out.print("* ");
//             }
//             System.out.println();
// }}}




// 
// *****
// *   *
// *   *
// *   *
// *****
// public class HollowRectangle {
//     public static void main(String[] args) {
//         int n=5;
//         int m=5; 
//         for (int i = 1; i <= m; i++) {
//             for (int j = 1; j <= n; j++) {
//                 if (i == 1 || i == m || j == 1 || j == n) {
//                     System.out.print("*");
//                 } else {
//                     System.out.print(" ");
//                 }
//             }
//             System.out.println();
//         }
//     }
// }






import java.util.*;

public class java1 {

    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scnr.nextInt();



//      *
//     ***
//    *****
//   *******
//  *********
// ***********

        // for (int i = 0; i <= num; i++) {
        //     for (int j = 0; j < num-i; j++) {
        //         System.out.print(" ");
        //     }
        //     for (int j = -1; j < (2*i-1)+1; j++) {
        //         System.out.print("*");
        //     }
        //     System.out.println();
        //     }+



        //     for (int i = num-1; i >= 0; i--) {
        //         for (int j = 0; j < num-i; j++) {
        //             System.out.print(" ");
        //         }
        //         for (int j = -1; j < (2*i-1)+1; j++) {
        //             System.out.print("*");
        //         }
        //         System.out.println();
        //         }
//         for (int i = 1; i <= 5; i++) {
//             for (int j = 5; j >= i; j--) {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }



// for (int i = 1; i <= 5; i++) {
//     for (int j = 1; j <= i; j++) {
//         System.out.print("*");
//     }
//     System.out.println();
// }     



// for (int i = 0; i < 8; i++) {
//     for (int j = 0; j < 8; j++) {
//         if (i == 0 || i == 7 || j == 0 || j == 7) {
//             System.out.print("*");
//         } else {
//             System.out.print(" ");
//         }
//     }
//     System.out.println();
// }




//     1
//    121
//   12321
//  1234321
// 123454321
//         for (int i = 0; i <= num; i++) {
//             for (int j = i; j < num; j++) {
//                 System.out.print(" ");
//             }
//             for (int j = 1; j <= i; j++) {
//                 System.out.print(j);
//             }
//             for (int j = i - 1; j >= 1; j--) {
//                 System.out.print(j);
//             }

//             System.out.println();
//         }
    }
}
