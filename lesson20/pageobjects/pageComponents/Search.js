const { BasePage } = require('../BasePage');

class Search extends BasePage {
  constructor() {
    super();
    this.searchButton = '.DocSearch-Button-Placeholder';
    this.searchInput = '.DocSearch-Input';
    this.searchList = '#docsearch-list';
  }

  async searchByPhrase(phrase) {
    await $(this.searchInput).setValue('wait');
    await $(this.searchList).waitForDisplayed();
    await browser.pause(5000);
    await browser.keys('Enter');
  }
}

module.exports = { Search };
