function selectionSort(array) {
  const sortedList = [];
  const list = [...array]
  for(let i = 0; i < array.length; i++) {
    const index = indexOfMin(list);
    sortedList.push(list.splice(index,1)[0])
  }
  return sortedList;
}

function indexOfMin(items) {
  let minIndex = 0;

  for(let i = 0; i <  items.length; i++) {
    if (items[i] < items[minIndex]) {
      minIndex = i
    }
  }
  return minIndex;
}

const numbers = [12,23,3,2,55,6,44,21];
selectionSort(numbers)
