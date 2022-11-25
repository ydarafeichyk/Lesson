const { BasePage } = require('../BasePage');

class Api extends BasePage {
  constructor() {
    super();
    this.apiLink = "(//a[@href='/docs/api'])[1]";
  }
}

module.exports = { Api };
