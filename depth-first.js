//Methods for Pre-Order, In-Order, and Post-Order traversal of a BST.

//I've added the constructor pattern here to help clarify the traversal methods
//below and how they work.


function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function preOrder(node) {
  console.log(node.value);
  if(node.left) preOrder(node.left);
  if(node.right) preOrder(node.left);
}

function inOrder(node) {
  if(node.left) inOrder(node.left);
  console.log(node.value);
  if(node.right) inOrder(node.right);
}

function postOrder(node) {
  if(node.right) postOrder(node.right);
  console.log(node.value);
  if(node.left) postOrder(node.left);
}
