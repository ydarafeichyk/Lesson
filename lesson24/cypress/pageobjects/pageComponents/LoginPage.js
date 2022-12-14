const { BasePage } = require('../BasePage');

class LoginPage extends BasePage {
  constructor() {
    super();
      
    this.inputLogin = () => cy.get("input[name='USER_LOGIN']");
    this.inputPassword = () => cy.get("input[name='USER_PASSWORD']");
    this.btnSubmit = () => cy.get('.btn-primary.submit');
    this.linkForgot = () => cy.get('.forgot');
  }
  
}

module.exports = new LoginPage();