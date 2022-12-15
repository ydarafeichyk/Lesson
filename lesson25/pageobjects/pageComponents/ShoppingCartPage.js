const { BasePage } = require('../BasePage');

class ShoppingCartPage extends BasePage {
  get cartMessage() {
    return "//div[text()='Товар добавлен в корзину ']"
  };
  get btnDel() {
    return "(//a[@class='delete'])[1]"
  };
  get emptyMessage() {
    return '//h3'
  };
     
}

module.exports = { ShoppingCartPage };