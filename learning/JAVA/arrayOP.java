//? create an Array


//* Datatype arrayname[] = new Datatype[size] [size mean kitna size ke location chaheya ]

// //? create an array using  different datatype
//  int arr1[] = new int[50];
//  int arr2[] = new int{1, 2, 3, 4};
//  String arr3[] = {"apples", "banana", "mango"}



import java.util.*;



public class arrayOP {




  public static void update(int marks[]) {
        for (int i = 0; i < marks.length - 1; i++) {
            marks[i] = marks[i + 1];
        }
        // Optional: Set last element to 0 or another value
        // marks[marks.length - 1] = 0;
    }
    public static void main(String[] args) {
        // Scanner scnr = new Scanner(System.in);

        // int marks[] = new int[10];

        // marks[0] = scnr.nextInt();
        // marks[1] = scnr.nextInt();
        // marks[2] = scnr.nextInt();



        // System.out.println("maths: " + marks[0]);
        // System.out.println("eng: " + marks[1]);
        // System.out.println("sci: " + marks[2]);
        // // System.out.println("Marks: " + Arrays.toString(marks));

        // // marks[2] = 100; // updated
        // marks[2] = marks[2] + 1; // updated 


        // System.out.println("sci: " + marks[2]);

        // int persentage = (marks[0] + marks[1] + marks[2]) / 3;
        // System.out.println("Persentage: " + persentage+ "%");

 



       int marks[] = {99,19,91};
        update(marks); // Update marks

        // Display updated marks array
        System.out.print("Updated marks: ");
        for (int i = 0; i < marks.length; i++) {
            System.out.print(marks[i] + " ");
        }
        System.out.println();





        // int arr1[] = new int[50];
        // int arr2[] = new int[]{1, 2, 3, 4};
        // String arr3[] = {"apples", "banana", "mango"};

        // // System.out.println(Arrays.toString(arr1));
        // System.out.println(Arrays.toString(arr2));
        // System.out.println(Arrays.toString(arr3));
    }       
}