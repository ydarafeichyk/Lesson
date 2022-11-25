class BasePage {
  async navigate(path) {
    return browser.url(path);
  }

  async switchWindowByTitle(title) {
    await browser.switchWindow(title);
  }
}

module.exports = { BasePage };
