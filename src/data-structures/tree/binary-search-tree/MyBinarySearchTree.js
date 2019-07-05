class BstNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

export default class MyBst {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (!this.root) {
      const rootNode = new BstNode(value);
      this.root = rootNode;
      return rootNode;
    }
    let currentNode = this.root;
    while (currentNode != null) {
      if (currentNode.value > value) {
        if (currentNode.left == null) {
          currentNode.left = new BstNode(value);
          return currentNode.left;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.value < value) {
          if (currentNode.right == null) {
            currentNode.right = new BstNode(value);
            return currentNode.right;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  find(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return null;
  }
  delete(value) {
    let node = this.root;
    let parentNode;
    while (node !== null && node.value !== value) {
      parentNode = node;
      if (value > node.value) {
        node = node.right;
      } else if (value < node.value) {
        node = node.left;
      }
    }
    if (node === null) {
      return null;
    }

    if (node.left !== null && node.right !== null) {
      let minNode = node.right;
      let minParentNode = node;
      while (minNode.left !== null) {
        minParentNode = minNode;
        minNode = minNode.left;
      }
      node.value = minNode.value;
      node = minNode;
      parentNode = minParentNode;
    }

    let child;
    if (node.left !== null) {
      child = node.left;
    } else if (node.right !== null) {
      child = node.right;
    } else {
      child = null;
    }

    if (parentNode == null) {
      this.root = child;
    } else if (parentNode.left === node) {
      parentNode.left = child;
    } else {
      parentNode.right = child;
    }
  }
}
