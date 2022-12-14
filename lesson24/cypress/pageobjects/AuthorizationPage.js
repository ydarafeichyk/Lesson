const { BasePage } = require('./BasePage');

class AuthorizationPage extends BasePage {
  constructor() {
    super();
    this.authorizationMessage = () => cy.get('.alert-danger');
  }
}

module.exports = new AuthorizationPage();