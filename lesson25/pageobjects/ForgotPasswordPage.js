const { BasePage } = require('./BasePage');

class ForgotPasswordPage extends BasePage {
  get passwordMessage() {
    return "//h1"
  };
    
}

module.exports = { ForgotPasswordPage };