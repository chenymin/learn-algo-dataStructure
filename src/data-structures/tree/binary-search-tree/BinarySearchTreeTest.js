// import BinarySearchTree from './BinarySearchTree';
//
// const bst = new BinarySearchTree();
// const insertedNode1 = bst.insert(10);
// const insertedNode2 = bst.insert(20);
// bst.insert(5);
// bst.insert(8);
// bst.insert(6);
// console.log(bst.root.value)
// console.log(insertedNode1.value, insertedNode2.value);
// console.log(bst.toString());

import MyBinarySearchTree from './MyBinarySearchTree';

const myBst = new MyBinarySearchTree();
// myBst.insert(10);
// myBst.insert(20);
// myBst.insert(5);
// myBst.insert(8);
// myBst.insert(6);
//
// console.log(myBst.root.value);
// console.log(myBst.root.right.value);
// console.log(myBst.root.left.value);
// console.log(myBst.root.left.right.value);
// console.log(myBst.root.left.right.left.value);
//
// console.log(myBst.find(20))
// console.log(myBst.find(8))

myBst.insert(33);
myBst.insert(16);
myBst.insert(50);
myBst.insert(13);
myBst.insert(18);
myBst.insert(17);
myBst.insert(15);
myBst.insert(25);
myBst.insert(19);
myBst.insert(27);
myBst.insert(34);
myBst.insert(58);
myBst.insert(51);
myBst.insert(66);
myBst.insert(55);

// myBst.delete(55)
//
// console.log(myBst.find(58).left);

console.log(myBst.find(18));
myBst.delete(18);
console.log(myBst.find(16));
console.log(myBst.find(19));
console.log(myBst.find(25));
