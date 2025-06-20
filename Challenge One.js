//Index number: 3395022



class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      const node = this._traverse(word);
      return node !== null && node.isEndOfWord;
    }
  
    startsWith(prefix) {
      return this._traverse(prefix) !== null;
    }
  
    _traverse(prefix) {
      let node = this.root;
      for (const char of prefix) {
        if (!node.children[char]) {
          return null;
        }
        node = node.children[char];
      }
      return node;
    }
  }
  
  // Example usage:
  const trie = new Trie();
  console.log(trie.insert("apple"));        // null (undefined in JS)
  console.log(trie.search("apple"));        // true
  console.log(trie.search("app"));          // false
  console.log(trie.startsWith("app"));      // true
  console.log(trie.insert("app"));          // null
  console.log(trie.search("app"));          // true
  