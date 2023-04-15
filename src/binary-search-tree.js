const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  _root = null;

  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node(data);
    } else {
      this._add(this._root, new Node(data));
    }
  }

  _add(parentNode, childNode) {
    if (parentNode.data > childNode.data) this._insert('left', parentNode, childNode);
    if (parentNode.data < childNode.data) this._insert('right', parentNode, childNode);
  }

  _insert(direct, parentNode, childNode) {
    if (parentNode[direct] === null) {
      parentNode[direct] = childNode;
    } else {
      this._add(parentNode[direct], childNode);
    }
  }

  has(data) {
    return this._has(this._root, data);
  }

  _has(node, data) {
    if (node === null) return false;
    if (node.data === data) return true;
    if (node.data > data) return this._has(node.left, data);
    if (node.data < data) return this._has(node.right, data);
  }

  find(data) {
    return this._find(this._root, data);
  }

  _find(node, data) {
    if (node === null) return null;
    if (node.data === data) return node;
    if (node.data > data) return this._find(node.left, data);
    if (node.data < data) return this._find(node.right, data);
  }

  remove(data) {
    if (this._root === null) return null;
    this._root = this._remove(this._root, data);
  }

  _remove(node, data) {
    if (node.data === data) {
      if (node.left === null && node.right === null) return null;
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
      const minData = this._min(node.right);
      node.data = minData;
      node.right = this._remove(node.right, minData);
    }
    if (node.data < data) {
      if (node.right === null) return node;
      node.right = this._remove(node.right, data);
    }
    if (node.data > data) {
      if (node.left === null) return node;
      node.left = this._remove(node.left, data);
    }
    return node;
  }

  min() {
    return this._min(this._root);
  }

  _min(node) {
    if (node.left === null) return node.data;
    return this._min(node.left);
  }

  max() {
    return this._max(this._root);
  }

  _max(node) {
    if (node.right === null) return node.data;
    return this._max(node.right);
  }
}

module.exports = {
  BinarySearchTree
};
