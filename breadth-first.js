//This method below is a breadth-first traversal of a BST


function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function breadthFirstSearch(root) {
  var queue = [];

  while(queue.length > 0) {
    var node = queue[0];
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right)
  }
}
