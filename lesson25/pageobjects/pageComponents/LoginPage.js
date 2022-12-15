const { BasePage } = require('../BasePage');

class LoginPage extends BasePage {
    get btnLogin() {
        return "//a[@href='/auth/?backurl=/']"
    };
    get input_login() {
        return "input[name='USER_LOGIN']"
    };
    get input_password() {
        return "input[name='USER_PASSWORD']"
    };
    get btnSubmit() {
        return '.btn-primary.submit'
    };
    get linkForgot() {
        return '.forgot'
    };
    async click(selector) {
        await this.page.locator(selector).click(); 
    }
    async fill(selector, text) {
        await this.page.locator(selector).fill(text);
    }
  }
   
module.exports = { LoginPage };