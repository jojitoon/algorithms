const recursiveBinarySearch = (list, target) => {
  
  if(!list.length) return false
  
  const midpoint = Math.floor(list.length/2);
  const midpoint_value = list[midpoint];
  
  if(midpoint_value == target) return true;
  
  if(midpoint_value < target) {
    return recursiveBinarySearch(list.splice(midpoint + 1), target)
  }else {
    return recursiveBinarySearch(list.splice(0,midpoint), target);
  }
}


const numbers = [...Array(10)].map((_,i) => i);


recursiveBinarySearch(numbers, 100);


