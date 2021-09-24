function mergeSort(list) {
  if (list.length<= 1) return list;
  const sorted = []
  const [left, right] = split(list);
  const leftHalf = mergeSort(left);
  const rightHalf = mergeSort(right);
  let leftIndex = 0, rightIndex = 0;
  
  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if(leftHalf[leftIndex] < rightHalf[rightIndex]) {
      sorted.push(leftHalf[leftIndex]);
      leftIndex+=1
    } else {
       sorted.push(rightHalf[rightIndex]);
      rightIndex+=1
    }
  }
  sorted.push(...[...leftHalf.slice(leftIndex), ...rightHalf.slice(rightIndex)])
  return sorted
}

function split(list) {
    /*
      Divide the unsorted list at midpoint into sublists
      Returns two sublists - left and right
      
      Takes overall O(log n) time
    */
    const midpoint = Math.floor(list.length / 2);
    const left = list.slice(0, midpoint);
    const right = list.slice(midpoint);
    
    return [left, right]
  }

const numbers = [34, 45,22,12,45,56,23,56,66];
mergeSort(numbers)
