function mergeSort(list) {
  /*
    Sort a list in ascending order
    Returns a new sorted list
    
    Divide: Find the midpoint of the list and divide into sublist
    Conquer: Recursively sort the sublists created in previous step
    Combine: Merge the sorted sublists created in previous step
    
    Takes overall O(n log n) time
  */
  
  if (list.length <= 1) return list;
  
  const [leftHalf, rightHalf] = split(list);
  console.log(leftHalf,rightHalf, 'splitted')
  const left = mergeSort(leftHalf);
  const right = mergeSort(rightHalf);
  console.log(left,right, 'sorted')
  return merge(left, right);
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

function merge (left, right) {
  /*
    merge two sublist and sorts them in the process
    Returns  a new sorted merged list
    
    Takes overall O(n) time
  */
  const newList = [];
  let i = 0, j =0;
  
  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      newList.push(left[i]);
      i+=1;
    } else {
      newList.push(right[j]);
      j+=1;
    }
  }
  while (i < left.length) {
     newList.push(left[i]);
      i+=1;
  }
  
  while (j < right.length) {
     newList.push(right[j]);
      j+=1;
  }
  return newList;
}



const numbers = [34, 45,22,12,45,56,23,56,66];
mergeSort(numbers)
numbers.slice(0,4)