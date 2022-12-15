const { BasePage } = require('../BasePage');

class CatalogPage extends BasePage {
  
    get btnVelo() {
        return "//a[@itemprop='url']"
    };
    get mountainVelo() {
        return "//div[@class='catalog-section-list-item']"
    };
    get linkQuickView() {
        return "(//div[@class='productColImage'])[1]"
    };
    get btnCart() {
        return "(//a[contains(@class,'addCart changeID')])[2]"
    };
    get teenageVelo() {
        return "(//div[@class='catalog-section-list-item'])[4]"
    };
    
    get icon_AddWish() {
        return "//a[@class='elem addWishlist']"

    };
    get linkCityVelo() {
        return "(//span[@class='middle'])[1]"
    };
   
  }
  
 

module.exports = { CatalogPage };