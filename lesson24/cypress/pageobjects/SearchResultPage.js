const { BasePage } = require('./BasePage');

class SearchResultPage extends BasePage {
  constructor() {
    super();
    this.title_Search = () => cy.get('//h3');
  }
}

module.exports = new SearchResultPage();