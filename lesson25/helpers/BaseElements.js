const { BasePage } = require('../pageobjects/BasePage');

class BaseElements extends BasePage {
    async click(selector) {
        await this.page.locator(selector).click(); 
    }
    async fill(selector, text) {
        await this.page.locator(selector).fill(text);
    }
    
 }

module.exports = { BaseElements };