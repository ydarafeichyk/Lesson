const { BasePage } = require('../pageobjects/BasePage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');
const { FavoritesPage } = require('../pageobjects/pageComponents/FavoritesPage');
const { LoginPage } = require('../pageobjects/pageComponents/LoginPage');
const { ShoppingCartPage } = require('../pageobjects/pageComponents/ShoppingCartPage');
const { AuthorizationPage } = require('../pageobjects/AuthorizationPage');
const { ForgotPasswordPage } = require('../pageobjects/ForgotPasswordPage');

class PageFactory {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.catalogPage = new CatalogPage(page);
        this.favoritesPage = new FavoritesPage(page);
        this.loginPage = new LoginPage(page);
        this.shoppingCartPage = new ShoppingCartPage(page);
        this.authorizationPage = new AuthorizationPage(page);
        this.forgotPasswordPage = new ForgotPasswordPage(page);
    }
}
module.exports = { PageFactory };