const { BasePage } = require('../BasePage');

class ShoppingCartPage extends BasePage {
  get cartMessage() {
    return "(//div[@class='heading'])[5]"
  };
  get btnDel() {
    return "(//a[@class='delete'])[1]"
  };
  get emptyMessage() {
    return '//h3'
  };
     
}

module.exports = { ShoppingCartPage };