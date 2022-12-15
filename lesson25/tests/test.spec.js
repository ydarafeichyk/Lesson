const { test, expect } = require('@playwright/test');
const { PageFactory } = require('../pageobjects/PageFactory.js');


test.describe('Automated testing Velosiped.by', function () {
//   test.beforeEach(async ({page}) => {
//     const page = new PageFactory(page);
//     await page.basePage.navigate('https://velosiped.by/');
// })


  test('check login in with invalid credentials', async ({page}) => {
    const pageFactory = new PageFactory(page);
    await pageFactory.basePage.navigate('https://velosiped.by/');
    await pageFactory.loginPage.click(pageFactory.loginPage.btnLogin); 
    await pageFactory.loginPage.fill(pageFactory.loginPage.input_login, 'login');
    await pageFactory.loginPage.fill(pageFactory.loginPage.input_password, '11111111');
    await pageFactory.loginPage.click(pageFactory.loginPage.btnSubmit);
    await expect(page.locator(pageFactory.authorizationPage.authorizationMessage)).toHaveText('Неверный логин или пароль.');
  });

  test('check function forgot passport', async ({page}) => {
    const pageFactory = new PageFactory(page);
    await pageFactory.basePage.navigate('https://velosiped.by/');
    await pageFactory.loginPage.click(pageFactory.loginPage.btnLogin);
    await pageFactory.loginPage.fill(pageFactory.loginPage.input_login, 'login');
    await pageFactory.loginPage.click(pageFactory.loginPage.linkForgot);
    await expect(page.locator(pageFactory.forgotPasswordPage.passwordMessage)).toHaveText("Забыли пароль?")

        
  }); 

  test('should add product in shopping cart', async ({page}) => {
    const pageFactory = new PageFactory(page);
    await pageFactory.basePage.navigate('https://velosiped.by/');
    await pageFactory.catalogPage.click(pageFactory.catalogPage.btnVelo);
    await pageFactory.catalogPage.click(pageFactory.catalogPage.mountainVelo);
    await pageFactory.catalogPage.click(pageFactory.catalogPage.linkQuickView);
    await pageFactory.catalogPage.click(pageFactory.catalogPage.btnCart);
    await expect(page.locator(pageFactory.shoppingCartPagecartMessage)).toHaveText("Товар добавлен в корзину")

  
});

  test('Check adding product to favorites', async ({page}) => {
    const pageFactory = new PageFactory(page);
    await pageFactory.basePage.navigate('https://velosiped.by/');
    await pageFactory.catalogPage.click(pageFactory.catalogPage.btnVelo);
    await pageFactory.catalogPage.click(pageFactory.catalogPage.teenageVelo);
    await pageFactory.catalogPage.click(pageFactory.catalogPage.linkQuickView);
    await pageFactory.catalogPage.click(pageFactory.catalogPage.icon_AddWish);
    await pageFactory.favoritesPage.click(pageFactory.catalogPage.btn_Favorite);
    await expect(page.locator(pageFactory.catalogPage.linkCityVelo).first()).toBeVisible();
   

    });
  });

    