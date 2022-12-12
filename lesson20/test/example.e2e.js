const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { Api } = require('../pageobjects/pageComponents/Api');
const { GitHubButton } = require('../pageobjects/pageComponents/GitHubButton');
const { Search } = require('../pageobjects/pageComponents/Search');
const { SearchResultsPage } = require('../pageobjects/SearchResultsPage');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const api = new Api();
const gitHubButton = new GitHubButton();
const search = new Search();
const searchResultsPage = new SearchResultsPage();

describe('Automated website "Webdriverio" testing', () => {
  beforeEach(async () => {
    await mainPage.navigate('https://webdriver.io/');
  });

  it(`Title should be "WebdriverIO" on the WebdriverIO page`, async () => {
    expect(await browser.getTitle()).to.equal('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
  });

  it(`Title should be "Introduction | WebdriverIO" on the API page`, async () => {
    await I.click(api.apiLink);
    await browser.pause(5000);
    expect(await browser.getTitle()).to.equal('Introduction | WebdriverIO');
  });

  it(`Url must contain "webdriverio" after going to the page GitHub`, async () => {
    await I.click(gitHubButton.gitHubLink);
    await browser.switchWindow('webdriverio/webdriverio: Next-gen browser and mobile automation test framework for Node.js');
    expect(await browser.getUrl()).to.equal('https://github.com/webdriverio/webdriverio');
  });
  it(`Url must contain "webapp-testing-guidebook" after going to the page "Read the book"`, async () => {
    await I.click(mainPage.readTheBookButton);
    await browser.switchWindow('Web App Testing Guidebook by Kevin Lamping [PDF/iPad/Kindle]');
    expect(await browser.getUrl()).to.contain('webapp-testing-guidebook');
  });

  it(`Title must contain the word 'wait' after entering in the search field`, async () => {
    await I.click(search.searchButton);
    await search.searchByPhrase('wait');
    await $(searchResultsPage.searchResultsTitles).waitForDisplayed(),
    expect(await browser.getTitle()).to.contain('waitForExist');
  });
});
