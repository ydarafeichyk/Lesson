const { BasePage } = require('./BasePage');

class MainPage extends BasePage {
  
    get 'Get Started Button'() {
        return $("(//a[@href='/docs/gettingstarted'])[2]");
    }
  
  }


module.exports = { MainPage };