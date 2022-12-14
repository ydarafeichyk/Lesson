const { BasePage } = require('../BasePage');

class SearchPage extends BasePage {
  constructor() {
    super();
    this.input_SearchField = () => cy.get('#searchQuery');
    this.btn_GoSearch = () => cy.get('#modef_send');
  }
  
}

module.exports = new SearchPage();