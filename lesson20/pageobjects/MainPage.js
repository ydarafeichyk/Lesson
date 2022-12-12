const { BasePage } = require('./BasePage');

class MainPage extends BasePage {
  constructor() {
    super();
    this.readTheBookButton = ".buttons_pzbO a[href='https://leanpub.com/webapp-testing-guidebook']";
  }
}

module.exports = { MainPage };
