const { MainPage } = require('../pageobjects/MainPage');
const { SearchResultPage } = require('../pageobjects/SearchResultPage');
const { ApiPage } = require('../pageobjects/pageComponents/ApiPage');
const { VersionPage } = require('../pageobjects/pageComponents/VersionPage');
const { SearchPage } = require('../pageobjects/pageComponents/SearchPage');

class PageFactory {
    static 'Main Page' = new MainPage();
    static 'SearchResult Page' = new SearchResultPage();
    static 'Api Page' = new ApiPage();
    static 'Version Page' = new VersionPage();
    static 'Search Page' = new SearchPage();

}

module.exports = { PageFactory };