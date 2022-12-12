const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');

Given(/^I navigate to "(.*)" page$/, async (url) => {
    await browser.url(url);
    await browser.setWindowSize(1920, 1080);
    await browser.pause(2000);
});

Then('I expect that the title is {text}', async(title) => {

  expect(await browser.getTitle()).to.equal(title);

});

When('I click {locator} button', async (selector) => {
    await $(selector).click();
    await browser.pause(2000);
});

When('I switch to another window {text}', async (title) => {
  await browser.switchWindow(title);
});

Then('I expect that the url is {text}', async(url) => {

    expect(await browser.getUrl()).to.equal(url);
});

Then('I expect that the url to contain {text}', async(text) => {

    expect(await browser.getUrl()).to.contain(text);
});

When('I fill in {locator} field with {text}', async (selector, keyword) => {

  await $(selector).setValue(keyword); 

});

When('I click Enter key', async () => {

  await browser.pause(2000);    
  await browser.keys('Enter');

});

When('I wait for search results {locator}', async (selector) => {

  await $(selector).waitForDisplayed();

});

  Then('I expect that the title to contain {text}', async(keyword) => {

    expect(await browser.getTitle()).to.contain(keyword);
});

