//The method below is a breadth-first traversal of a BST


function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.parent = null;
}

BST.prototype.breadthFirstSearch = function() {
  if(!this.root) return;

  var queue = [];
  queue.push(this.root);

  while(queue.length > 0) {
    var node = queue[0];

    console.log(node.value);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right)

    queue.shift();
  }
}
