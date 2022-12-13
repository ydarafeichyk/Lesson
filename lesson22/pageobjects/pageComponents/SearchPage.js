const { BasePage } = require('../BasePage');

class SearchPage extends BasePage {

  get 'Search Button'() {
    return $('.DocSearch-Button-Placeholder');
  } 
  get 'Search Input'() {
    return $('.DocSearch-Input');
  } 
  
}


module.exports = { SearchPage };