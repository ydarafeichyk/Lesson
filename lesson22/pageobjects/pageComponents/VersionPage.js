const { BasePage } = require('../BasePage');

class VersionPage extends BasePage {

  get 'Version Button'() {
    return $("//a[@href='/versions']");
  } 
  
}


module.exports = { VersionPage };