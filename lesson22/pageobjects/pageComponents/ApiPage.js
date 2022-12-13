const { BasePage } = require('../BasePage');

class ApiPage extends BasePage {

  get 'Api Link'() {
    return $("(//a[@href='/docs/api'])[1]");
  }
}


module.exports = { ApiPage };