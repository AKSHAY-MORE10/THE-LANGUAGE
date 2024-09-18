Certainly! Here are the questions with hints, including example inputs and outputs:

---

### 1D Array Questions

1. **Sum of Array Elements:**  
   **Input:** `arr = {10, 20, 30, 40, 50}`  
   **Output:** `150`  
   **Hint:** Use a loop to add each element of the array to a `sum` variable.

---

2. **Find Maximum Element in Array:**  
   **Input:** `arr = {15, 42, 7, 89, 33}`  
   **Output:** `89`  
   **Hint:** Initialize `max` with the first element and update it if a larger element is found while looping through the array.

---

3. **Reverse Array:**  
   **Input:** `arr = {1, 2, 3, 4, 5}`  
   **Output:** `{5, 4, 3, 2, 1}`  
   **Hint:** Swap elements from the start and end moving towards the center until all elements are reversed.

---

4. **Count Occurrences of a Number in Array:**  
   **Input:** `arr = {4, 2, 4, 3, 4, 1}`, target `4`  
   **Output:** `3`  
   **Hint:** Loop through the array and increment a counter each time the target number is found.

---

5. **Find Second Largest Element in Array:**  
   **Input:** `arr = {12, 35, 1, 10, 34, 1}`  
   **Output:** `34`  
   **Hint:** Track both the largest and the second largest elements while looping through the array.

---

6. **Sum of Elements at Even Indexes:**  
   **Input:** `arr = {5, 10, 15, 20, 25, 30}`  
   **Output:** `5 + 15 + 25 = 45`  
   **Hint:** Use a loop with an increment of 2 to access elements at even indexes.

---

7. **Check if Array is Sorted:**  
   **Input:** `arr = {1, 2, 3, 4, 5}`  
   **Output:** `true` (indicating the array is sorted)  
   **Hint:** Compare each element with the next one to check if the array is sorted in ascending order.

---

### 2D Array Questions

1. **Transpose of a 2D Array:**  
   **Input:** `arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}`  
   **Output:** `{{1, 4, 7}, {2, 5, 8}, {3, 6, 9}}`  
   **Hint:** Swap rows with columns using nested loops to create the transpose of the matrix.

---

2. **Find the Sum of Each Row in a 2D Array:**  
   **Input:** `arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}`  
   **Output:** `6, 15, 24` (sum of each row)  
   **Hint:** Iterate over each row and sum its elements, then store or print the sum for each row.

---

3. **Find the Sum of Each Column in a 2D Array:**  
   **Input:** `arr = {{10, 20, 30}, {40, 50, 60}, {70, 80, 90}}`  
   **Output:** `120, 150, 180` (sum of each column)  
   **Hint:** Use nested loops to sum elements column-wise and store or print the sum for each column.

---

### 3D Array Questions

1. **Sum of All Elements in a 3D Array:**  
   **Input:** `arr = {{{1, 2}, {3, 4}}, {{5, 6}, {7, 8}}}`  
   **Output:** `36`  
   **Hint:** Use three nested loops to traverse all dimensions (layers, rows, and columns) and sum up all elements.

---

2. **Find the Maximum Element in a 3D Array:**  
   **Input:** `arr = {{{1, 2, 3}, {4, 5, 6}}, {{7, 8, 9}, {10, 11, 12}}}`  
   **Output:** `12`  
   **Hint:** Initialize `max` with the first element and update it as you compare with every element in the 3D array using three nested loops.

---