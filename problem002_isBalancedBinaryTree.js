/**
https://www.interviewcake.com/question/javascript/bst-checker?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23193:%20Binary%20Search%20Tree%20Checker&utm_medium=email&utm_medium=email
*/
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBinarySearchTree(treeRoot) {
  const nodesAndBoundedStack = [{
    node: treeRoot,
    lowerBound: -Infinity,
    upperBound: Infinity
  }];

  while (nodesAndBoundedStack.length) {
    const { node, lowerBound, upperBound } = nodesAndBoundedStack.pop();
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }
    if (node.left && node.right) {
      if (node.left.value >= node.right.value) {
        return false;
      }
    }
    if (node.left) {
      nodesAndBoundedStack.push({
        node: node.left,
        upperBound: node.value,
        lowerBound
      });
    }
    if (node.right) {
      nodesAndBoundedStack.push({
        node: node.right,
        upperBound,
        lowerBound: node.value
      });
    }
  }
  return true;
}
