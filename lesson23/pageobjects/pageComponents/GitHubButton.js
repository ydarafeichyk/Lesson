const { BasePage } = require('../BasePage');

class GitHubButton extends BasePage {
  get 'GitHubLink'() {
    return $('.header-github-link');
  } 
}

module.exports = { GitHubButton };