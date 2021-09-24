function binarySearch(list, target) {
  let first = 0, last = list.length - 1;
  
  while (first <= last) {
    const midpoint = Math.floor((first + last)/2);
    if(list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1
    } else {
      last = midpoint - 1
    }
  }
  return null
}

const numbers = [...new Array(100000000)].map((n, i) => i);

binarySearch(numbers, 900)