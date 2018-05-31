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

function findSecondLargest(treeRoot) {
  // Find the second largest item in the binary search tree
  const nodeStack = [treeRoot];

  let biggest = -Infinity;
  let secondBiggest = -Infinity;

  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
    throw new Error('BST must have at least 2 nodes');
  }

  while (nodeStack.length) {
    const node = nodeStack.pop();

    if (node.value > biggest) {
      secondBiggest = biggest;
      biggest = node.value;
    } else if (node.value > secondBiggest) {
      secondBiggest = node.value;
    }

    // Given that the BST is valid, we can skip the left subtree
    // because we know right is bigger
    if (node.right) {
      nodeStack.push(node.right);
    } else if (node.left) {
      nodeStack.push(node.left);
    }
  }

  return Number.isFinite(secondBiggest) ? secondBiggest : null;
}
