const { BasePage } = require('./BasePage');

class ForgotPasswordPage extends BasePage {
  constructor() {
    super();
    this.passwordMessage = () => cy.get('//h1');
  }
}


module.exports = new ForgotPasswordPage();