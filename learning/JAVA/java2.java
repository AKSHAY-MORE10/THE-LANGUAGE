import java.util.*;

public class java2 {
//     public static void main(String[] args) {
//         Scanner scnr = new Scanner(System.in);
        
//         // String str = scnr.next(); // Use next() for single word input
//         String str = scnr.nextLine(); // Use nextLine() for full line input
//         System.out.println(str);
//     }

// public class Main {
//     public static void main(String[] args) {
//         int smallValue = 42;  // Source Type is `int`
//         double largerValue = smallValue;  // Destination Type is `double`

//         System.out.println("Small Value: " + smallValue);  // Output: 42
//         System.out.println("Larger Value: " + largerValue); // Output: 42.0
//     }
// }

// public class Main {
//     public static void main(String[] args) {
//         double source = 123.456;  // Source Type is `double`
//         int destination = (int) source;  // Explicit casting needed

//         System.out.println(destination); // Output: 123
//     }
// }

public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);

        System.out.print("Enter a number: ");

        int num = scnr.nextInt();
        if (num % 2 == 0) {
            System.out.println( " is an even number.");
        } else {
            System.out.println( " is an odd number.");
        }
         scnr.close(); 
    }

}


