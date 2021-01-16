/*
Day 22: Binary Search Trees
https://www.hackerrank.com/challenges/30-binary-search-trees/problem

The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. 
You are given a pointer, root, pointing to the root of a binary search tree. 
Complete the getHeight function provided in your editor so that it returns the height of the binary search tree.
*/

// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
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
  
  // Start of function getHeight
  this.getHeight = function(root) {
      if(root === null) {
          return -1;
      }
      
      const leftDepth = this.getHeight(root.left);
      const rightDepth = this.getHeight(root.right);
      
      return Math.max(leftDepth, rightDepth) + 1;

  }; // End of function getHeight
}; // End of function BinarySearchTree
