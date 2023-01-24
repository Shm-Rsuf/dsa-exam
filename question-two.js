// 5th degree sorted arr A = [2, 3, 5, 7, 10, 13, 17, 20, 24, 27, 30]
// target element = 17

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 3, 5, 7, 10, 13, 17, 20, 24, 27, 30], 17));

// space complexcity O(1)
//time complexcity O(log n)
