//This is my "scaffold" for creating a BST and it's Nodes or "vertices." The
//way in which I've structured my methods for adding Nodes is by defining a
//prototype method on my Node constructor which accepts a value. In this way I've
//separated my logic so that the prototype methods have access to the
//context (this) of my instantiated Nodes.

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

//currently only handling unique vals when adding nodes
Node.prototype.addNode = function(value) {
  if(value === this.value) return this;
  if(value < this.value) {
    if(this.left) {
      return this.left.addNode(value);
    }
    this.left = new Node(value);
    this.left.parent = this;
    return this;
  }
  if(value > this.value) {
    if(this.right) {
      return this.right.addNode(value)
    }
    this.right = new Node(value);
    this.right.parent = this;
    return this;
  }
}

function BST() {
  this.root = null;
}

//You can see here that my BST's own #addNode function is wrapping my Node's
//#addNode function.

BST.prototype.addNode = function(value) {
  if(!this.root) {
    this.root = new Node(value);
  }
  this.root.addNode(value);
  return this;
}

BST.prototype.findMin = function(node) {
  if(!node) return null;
  if (node.left) {
    return this.findMin(node.left);
  }
  return node;
}

BST.prototype.findMax = function(node) {
  if(!node) return null;
  if(node.right) {
    return this.findMax(node.right)
  }
  return node;
}

//This method accepts a node as a second argument, allowing for subtrees to be
//provided, otherwise the root is used.
BST.prototype.findNodeByVal = function(value, node) {
  if(!this.root) return null;
  if(!node) node = this.root;

  if(node.value === value) return node;
  if(node.value > value && node.left) return this.findNodeByVal(value, node.left);
  if(node.value < value && node.right) return this.findNodeByVal(value, node.right);

  return null;
}

BST.prototype.findAndDeleteNode = function(value) {
  if(!this.root) return;

  let node = this.findNodeByVal(value);

  if(node.left) {
    let max = this.findMax(node.left)
    node.value = max.value;
    max.parent.right = null;
  }

  else if(node.right) {
    let min = this.findMin(node.right)
    node.value = min.value;
    min.parent.left = null;
  }

  else {
    if(node.parent.right.value === node.value) node.parent.right = null;
    if(node.parent.left.value === node.value) node.parent.left = null;
  }
  return this;
}

//Instantiating my BST and adding nodes below.
const tree = new BST();

tree.addNode(20);
tree.addNode(10);
tree.addNode(30);
tree.addNode(5);
tree.addNode(18);
tree.addNode(25);
tree.addNode(40);
tree.addNode(2);
tree.addNode(6);
tree.addNode(12);
tree.addNode(19);
tree.addNode(24);
tree.addNode(28);
tree.addNode(35);
tree.addNode(100);
