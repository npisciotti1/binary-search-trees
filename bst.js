function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

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

BST.prototype.addNode = function(value) {
  if(!this.root) {
    this.root = new Node(value);
  }
  this.root.addNode(value);
  return this;
}

BST.prototype.findMin = function(node) {
  if (node.left) {
    return this.findMin(node.left);
  }
  return node;
}

BST.prototype.findMax = function(node) {
  if(node.right) {
    return this.findMax(node.right)
  }
  return node;
}

BST.prototype.findNodeByVal = function(value, _node) {
  if(!_node) _node = this.root;
  let node = _node;
  if(!node.left && !node.right) return node;
  if(node.left.value === value) return node.left;
  if(node.right.value === value) return node.right;
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
