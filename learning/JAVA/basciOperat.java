import java.util.Scanner;

public class java2 {
    public static void main(String[] args) {

        // Reverse a string (1,2,3,4,5)
        Scanner scnr = new Scanner(System.in);
        String str = scnr.nextLine();

        
        String reversed = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        System.out.println(reversed);
    }
}
