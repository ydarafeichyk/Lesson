const { test, expect } = require('@playwright/test');
const { PageFactory } = require('../pageobjects/PageFactory.js');
const { BaseElements } = require('../helpers/baseElements.js');


test.describe('Automated testing Velosiped.by', function () {
  test.beforeEach(async ({page}) => {
    const pageFactory = new PageFactory(page);
    const I = new BaseElements(page);
    await I.navigate('https://velosiped.by/');
})


  test('check login in with invalid credentials', async ({page}) => {
    const pageFactory = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(pageFactory.loginPage.btnLogin); 
    await I.fill(pageFactory.loginPage.input_login, 'login');
    await I.fill(pageFactory.loginPage.input_password, '11111111');
    await I.click(pageFactory.loginPage.btnSubmit);
    await expect(page.locator(pageFactory.authorizationPage.authorizationMessage)).toHaveText('Неверный логин или пароль.');
  });

  test('check function forgot passport', async ({page}) => {
    const pageFactory = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(pageFactory.loginPage.btnLogin);
    await I.fill(pageFactory.loginPage.input_login, 'login');
    await I.click(pageFactory.loginPage.linkForgot);
    await expect(page.locator(pageFactory.forgotPasswordPage.passwordMessage)).toHaveText("Забыли пароль?")
      
  }); 

  test('should add product in shopping cart', async ({page}) => {
    const pageFactory = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(pageFactory.catalogPage.btnVelo);
    await I.click(pageFactory.catalogPage.mountainVelo);
    await I.click(pageFactory.catalogPage.linkQuickView);
    await I.click(pageFactory.catalogPage.btnCart);
    await expect(page.locator(pageFactory.shoppingCartPage.cartMessage)).toHaveText("Товар добавлен в корзину")

});

  test('Check adding product to favorites', async ({page}) => {
    const pageFactory = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(pageFactory.catalogPage.btnVelo);
    await I.click(pageFactory.catalogPage.teenageVelo);
    await I.click(pageFactory.catalogPage.linkQuickView);
    await I.click(pageFactory.catalogPage.icon_AddWish);
    await I.click(pageFactory.favoritesPage.btn_Favorite);
    await expect(page.locator(pageFactory.catalogPage.linkCityVelo).first()).toBeVisible();
});

});

    