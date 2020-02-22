import Node from './Node';

export default class BinaryTree {
  constructor () {
    this.root = null;
  }

  // ----------------------------------------------
  // ----------------Insert------------------------
  // ----------------------------------------------
  // ----------WHILE LOOP SOLUTION-----------------

  insert(data) {
    let current = this.root;

    if (!this.root) {
      return this.root = new Node(data);
    }

    let direction = data <= current.data ? 'left' : 'right';

    while (current && current[direction]) {
      current = current[direction];
      direction = data <= current.data ? 'left' : 'right';
    }

    current[direction] = new Node(data);
  }

  // ----------RECURSIVE SOLUTION-----------------
  // insert(data) {
  //   // Create a new node, pass in data.
  //   let newNode = new Node(data);
  //   // If the root doesn't have a value,
  //   if(!this.root) {
  //     // assign the new node to the root.
  //     return this.root = newNode;
  //   }
  //   this.insertHelper(this.root, data)
  // }
  // insertHelper(currentNode, data) {
  //   let newNode = new Node(data);
  //   // Check direction;
  //   let direction = data <= currentNode.data ? 'left' : 'right';
  //   // If node exists,
  //   if (currentNode[direction]) {
  //     // Traverse to that node.
  //     currentNode = currentNode[direction];
  //     // run the function on the new node.
  //     this.insertHelper(currentNode, data);
  //     // otherwise
  //   } else {
  //     // set the new node in that location
  //     currentNode[direction] = newNode;
  //   }
  // }

  // ----------------------------------------------
  // -------------------Min-Max--------------------
  // ----------------------------------------------

  min() {
    let currentNode = this.root;
    if(!currentNode) {
      return null;
    }
    
    while(currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }
  
  max() {
    let currentNode = this.root;
    if(!currentNode) {
      return null;
    }
    while(currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  // ----------------------------------------------
  // --------------------Find----------------------
  // ----------------------------------------------

  find(data) {
    let currentNode = this.root;
    let direction = data <= currentNode.data ? 'left' : 'right';

    while (currentNode && currentNode[direction] && data !== currentNode.data) {
      currentNode = currentNode[direction];
      direction = data <= currentNode.data ? 'left' : 'right';
    }
      
    if (data === currentNode.data) {
      return currentNode;
    }

    return null;
  }

}
