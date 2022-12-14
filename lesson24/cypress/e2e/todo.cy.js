const loginPage = require('../pageobjects/pageComponents/LoginPage');
const authorizationPage = require('../pageobjects/AuthorizationPage');
const forgotPasswordPage = require('../pageobjects/ForgotPasswordPage');
const callPage = require('../pageobjects/pageComponents/CallPage');
const searchPage = require('../pageobjects/pageComponents/SearchPage');
const searchResultPage = require('../pageobjects/SearchResultPage');


describe('Autotesting site Velosiped.by', () => {
  
  beforeEach(() => {
    cy.visit('https://velosiped.by/');
  });

  it('Check login in with invalid credentials', () => {
    
    cy.contains("Вход").click();
          
    loginPage.inputLogin().type("Test")
          
    loginPage.inputPassword().type("111111111")
          
    loginPage.btnSubmit().click()
          
    authorizationPage.authorizationMessage().should('have.text', 'Неверный логин или пароль.\n')

  });
      
  it('Check function forgot password', async () => {
    
    cy.contains("Вход").click();

    loginPage.inputLogin().type("Test")

    loginPage.linkForgot().click();

    forgotPasswordPage.passwordMessage().should('have.text', 'Забыли пароль?')
                        
  });

  it('Check contact', async () => {
   
    callPage.link_RequestCall().click()

    callPage.input_Phone().type("80171111111");

    callPage.input_Name().type("test");

    callPage.checkbox().check();

    callPage.btnSendWebForm().click()

    callPage.callMessage().should('have.text', 'Сообщение отправлено')

  });

  it('Check search to brend', async () => {
    
    searchPage.input_SearchField().click()

    searchPage.input_SearchField().type("Stels"); 

    searchPage.btn_GoSearch().click()

    searchResultPage.title_Search().should('have.text', 'Товары по запросу: «Stels»')

  });

  })