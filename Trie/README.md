# Trie Data Structure Implementation

A JavaScript implementation of the Trie (prefix tree) data structure with common operations.

## Features

- **Insert**: Add words to the trie
- **Search**: Check if a complete word exists in the trie
- **StartsWith**: Check if any word in the trie starts with a given prefix

## Usage

```javascript
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");

// Search for complete words
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("banana")); // false

// Check prefixes
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // false
```

## API Reference

### `insert(word)`

Adds a word to the trie.

- **Parameters**: `word` (string) - The word to insert
- **Returns**: `undefined`

### `search(word)`

Searches for a complete word in the trie.

- **Parameters**: `word` (string) - The word to search for
- **Returns**: `boolean` - True if the word exists, false otherwise

### `startsWith(prefix)`

Checks if any word in the trie starts with the given prefix.

- **Parameters**: `prefix` (string) - The prefix to check
- **Returns**: `boolean` - True if any word starts with the prefix, false otherwise

## Time Complexity

- **Insert**: O(m) where m is the length of the word
- **Search**: O(m) where m is the length of the word
- **StartsWith**: O(m) where m is the length of the prefix

## Space Complexity

- **Storage**: O(ALPHABET_SIZE _ N _ M) where N is the number of words and M is the average word length

## Installation

```bash
git clone <repository-url>
cd trie
```

## Running the Example

```bash
node trie.js
```

## License

MIT License
