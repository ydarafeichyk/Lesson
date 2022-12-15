const { BasePage } = require('./BasePage');

class AuthorizationPage extends BasePage {
  get authorizationMessage() {
    return "//div[@class='alert alert-danger']"
  }
    
}

module.exports = { AuthorizationPage };