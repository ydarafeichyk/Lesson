const { BasePage } = require('./BasePage');

class SearchResultPage extends BasePage {

    get 'Search Titles'() {
        return $('//h1');
    }
}

module.exports = { SearchResultPage };
