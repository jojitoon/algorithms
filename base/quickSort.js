function quickSort(list) {
  if (list.length <= 1) return list;

  const lessThan = [];
  const greaterThan = [];
  const pivot = list[0];
  
  for (let item of list.slice(1)) {
    if(item <= pivot) {
      lessThan.push(item)
    } else {
      greaterThan.push(item)
    }
  }
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]
}

const numbers = [22,4,1,2,42,3,4,5];

quickSort(numbers);
  