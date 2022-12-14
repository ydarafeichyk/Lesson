const { BasePage } = require('../BasePage');

class CallPage extends BasePage {
  constructor() {
    super();
    this.link_RequestCall = () => cy.get('.openWebFormModal');
    this.input_Phone = () => cy.get("input[name='form_text_6']");
    this.input_Name = () => cy.get("input[name='form_text_7']");
    this.checkbox = () => cy.get("label.label-for");
    this.btnSendWebForm = () => cy.get("input[name='web_form_submit']");
    this.callMessage = () => cy.get('.webFormMessageHeading');
  }

}

module.exports = new CallPage();