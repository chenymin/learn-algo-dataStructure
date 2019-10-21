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

  /**
   * 1第一种情况是，如果要删除的节点没有子节点，我们只需要直接将父节点中，指向要删除节点的指针置为 null
   * 2如果要删除的节点只有一个子节点（只有左子节点或者右子节点），我们只需要更新父节点中，指向要删除节点的指针，
   * 3如果要删除的节点有两个子节点，这就比较复杂了。我们需要找到这个节点的右子树中的最小节点，把它替换到要删除的节点上。
   * 然后再删除掉这个最小节点，因为最小节点肯定没有左子节点（如果有左子结点，那就不是最小节点了），所以，我们可以应用上面两条规则
   * 来删除这个最小节点。
   *
   * */
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

    // 要删除的节点有两个子节点
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
  // 先序遍历
  preOrderUnRecur(node) {
    if (!node) {
      throw new Error('Empty Tree');
    }
    const stack = [];
    stack.push(node);
    while (stack.length !== 0) {
      node = stack.pop();
      console.log(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }
  // 中序遍历
  inOrderUnRecur(node, k) {
    if (!node) {
      throw new Error('Empty Tree');
    }
    const stack = [];
    let currentIndex = -1;
    while (stack.length !== 0 || node) {
      if (node) {
        stack.push(node)
        node = node.left;
      } else {
        node = stack.pop();
        // console.log(node.value);
        currentIndex += 1;
        if (k - 1 === currentIndex) {
          console.log(`第k${node.value}`);
        }
        node = node.right;
      }
    }
    return stack;
  }

}
