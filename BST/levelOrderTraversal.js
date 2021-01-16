/**
 * Day 23: BST Level-Order Traversal
 * AKA Breadth First Search
 * https://www.hackerrank.com/challenges/30-binary-trees/problem

 Task
A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. 
You are given a pointer, root, pointing to the root of a binary search tree. 
Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree.

Hint: You'll find a queue helpful in completing this challenge.

 */

function BinarySearchTree() {
  this.insert = function(root, data) {
      if (root === null) {
          this.root = new Node(data);
          
          return this.root;
      }
      
      if (data <= root.data) {
          if (root.left) {
              this.insert(root.left, data);
          } else {
              root.left = new Node(data);
          }
      } else {
          if (root.right) {
              this.insert(root.right, data);
          } else {
              root.right = new Node(data);
          }
      }
      
      return this.root;
  };
  
  // Start of function levelOrder
  this.levelOrder = function(root) {
      const queue = [root];
      while(queue.length > 0) {
          const val = queue.shift();
          process.stdout.write(val.data + ' ');
          
          if(val.left) {
              queue.push(val.left);
          }
          if(val.right) {
              queue.push(val.right);
          }
      }

  }; // End of function levelOrder
}; // End of function BinarySearchTree
