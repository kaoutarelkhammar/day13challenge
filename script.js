
// Selection Sort

function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example 
const unsortedArr = [28, 32, 27, 18, 24, 13];
const sortedArr = selectionSort(unsortedArr);
console.log("Sorted array:", sortedArr);


// Bubble Sort

function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements and swap if needed
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example 
const unsortedArray = [14, 24, 35, 16, 22];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);


// Insertion Sort 
 
function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

       
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

// Example 
const unsortedArray = [40, 24, 37, 19, 22];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted array:", sortedArray);


// Linear Search 
function linearSearch(arr, target) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }

    return -1; 
}

// Example usage
const numbersArray = [48, 24, 15, 10, 22];
const targetElement = 22;
const foundIndex = linearSearch(numbersArray, targetElement);

if (foundIndex !== -1) {
    console.log(`Element ${targetElement} found at index ${foundIndex}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}



//  matrix 


function countZeros(matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                count++;
            }
        }
    }

    return count;
}

// Example matrix
const matrix = [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 1, 0]
];

const zeroCount = countZeros(matrix);
console.log(`Number of occurrences of "0" in the matrix: ${zeroCount}`);
