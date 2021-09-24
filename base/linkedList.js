class NodeItem {
  // a single node of a linked list
  data = null;
  nextNode = null;
  constructor(data) {
    this.data = data
  }
}

// const n1= new NodeItem(10);
// const n2= new NodeItem(20);



class LinkedList {
  head = null
  constructor() {
    this.head = null
  }
  
  isEmpty() {
    return !this.head
  }
  
  size() {
    /* 
     gets the size of the list
      Take O(n) time
    */
    let current = this.head, count = 0;
      
    while (current) {
      count+=1;
      current = current.nextNode
    }
    return count
  }
  
  add (data) {
    /* 
      add a node the begining of the list
      Take O(1) time
    */
    const newNode = new NodeItem(data);
    newNode.nextNode = this.head;
    this.head = newNode;
  }
  
  search(key) {
    /* 
      Search for the first node that contain the data
      Take O(n) time
    */
    let current = this.head;
    
    while(current) {
      if(current.data == key) {
        return current;
      } else {
        current = current.nextNode;
      }
    }
    return null
  }
  insert(data, index) {
    /*
      inserts a new node containing data at index position
      insertion take O(1) time but finding rhe insertion point take O(n) time
    */
    
    if(index ==0) {
      this.add(data)
    }
    if (index > 0) {
      const newNode = new NodeItem(data);
      let position = index, current = this.head;
      
      while(position > 1 && current) {  
        current = current.nextNode
        position-=1;
      }
      if (current) {
        const prev = current;
        const next = current.nextNode;
        prev.nextNode = newNode;
        newNode.nextNode = next;
      }
    }
  }
  
  remove (key) {
    /*
      Removes node containing data that matches the key
      Returns the node or null if key doesn't exist
      Takes O(n) time
    */
    let current = this.head,
        found = false,
        previous = null;
    
    while(current && !found) {
      if(current.data == key && current == this.head) {
        found = true;
        this.head = current.nextNode;
      } else if (current.data == key) {
        found = true;
        previous.nextNode = current.nextNode;
      } else {
        previous = current;
        current = current.nextNode;
      } 
    }
    return current;
  }

}




const list = new LinkedList();

list.size();
list.isEmpty();
list.add(2);
list.size();
list.add(3);
list.insert(20, 1)
list.remove(2);
list


module.exports = LinkedList


