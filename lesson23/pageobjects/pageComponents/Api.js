const { BasePage } = require('../BasePage');

class Api extends BasePage {

  get 'Api Link'() {
    return $("(//a[@href='/docs/api'])[1]");
  }
}


module.exports = { Api };