const { BasePage } = require('../BasePage');

class Search extends BasePage {
  get 'Search Button'() {
    return $('.DocSearch-Button-Placeholder');
  } 
  get 'Search Input'() {
    return $('.DocSearch-Input');
  } 
  
}
    

module.exports = { Search };