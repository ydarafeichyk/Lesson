const { MainPage } = require('../pageobjects/MainPage');
const { SearchResultPage } = require('../pageobjects/SearchResultPage');
const { Api } = require('../pageobjects/pageComponents/Api');
const { GitHubButton } = require('../pageobjects/pageComponents/GitHubButton');
const { Search } = require('../pageobjects/pageComponents/Search');

class PageFactory {
    static 'Main Page' = new MainPage();
    static 'SearchResultPage' = new SearchResultPage();
    static 'Api' = new Api();
    static 'GitHubButton' = new GitHubButton();
    static 'Search' = new Search();

}

module.exports = { PageFactory };