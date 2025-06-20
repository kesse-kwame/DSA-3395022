class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically during initialization
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = '';

    for (const char of searchWord) {
      prefix += char;

      // Filter products that start with the current prefix
      const matches = this.products.filter(product => product.startsWith(prefix));

      // Add up to 3 matching results
      result.push(matches.slice(0, 3));
    }

    return result;
  }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
const suggestions = system.getSuggestions(searchWord);

console.log(suggestions);
