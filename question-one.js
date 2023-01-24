// 1st arr A = [1, 2, 5, 7, 8, 10]
// 2nd arr B = [3, 4, 5, 7, 11, 15]

// 3rd arr C =[1, 3, 2, 4, 8, 11, 10, 15]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - (i + 1); j++) {
      console.log("to see", arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 3, 2, 4, 8, 11, 10, 15]));

//space complexcity O(1)
//time complexcity O(n^2)
