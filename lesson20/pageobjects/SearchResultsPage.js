const { BasePage } = require('./BasePage');

class SearchResultsPage extends BasePage {
  constructor() {
    super();
    this.searchResultsTitles = '//h1';
  }
}

module.exports = { SearchResultsPage };
