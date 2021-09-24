function linearSearch(list, target) {
  // return the index position of the target if found else return null
  
  for(let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
    return null;
}



linearSearch([1,2,6,5], 1);