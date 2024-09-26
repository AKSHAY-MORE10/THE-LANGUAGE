import java.util.*;

public class basciOperat {


    public static void main(String[] args) {

        // transpose of array 
    int[][] arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};


    //! transpose of arrays
    // for (int i = 0; i < arr.length; i++) {
    //     for (int j = 0; j < arr[i].length; j++) {
    //         System.out.print(arr[j][i] + " ");
    //     }
    //     System.out.println();
    // }


//! sum of 2D array

    //    int sum = 0;
    // for (int i = 0; i<arr.length; i++){
    //     for (int j = 0; j<arr[i].length; j++){
    //         sum += arr[i][j];
    // }
    // System.out.println(sum);
    // }


// print sum of 2D array first index of each array

        // Initialize the 2D array
        // int[][] arr = {
        //     {10, 20, 30},
        //     {40, 50, 60},
        //     {70, 80, 90}
        // };

        // Array to hold column-wise sum
        int[] arrCol = new int[arr[0].length];

        // Traverse through the 2D array
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                // Add the elements to the respective column index
                arrCol[j] += arr[i][j];
            }
        }

        // Output the column-wise sum
        System.out.println("Column-wise sum: ");
        for (int sum : arrCol) {
            System.out.print(sum + " ");
        }
    }
}
