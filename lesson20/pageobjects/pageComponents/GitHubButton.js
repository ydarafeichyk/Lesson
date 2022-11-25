const { BasePage } = require('../BasePage');

class GitHubButton extends BasePage {
  constructor() {
    super();
    this.gitHubLink = '.header-github-link';
  }
}

module.exports = { GitHubButton };
