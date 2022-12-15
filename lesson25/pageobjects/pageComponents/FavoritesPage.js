const { BasePage } = require('../BasePage');

class FavoritesPage extends BasePage {
  get btn_Favorite() {
    return "(//span[@class='icon'])[2]"
  };
    
 
}

module.exports = { FavoritesPage };