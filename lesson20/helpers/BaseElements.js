class BaseElements {
  async click(element) {
    await $(element).waitForClickable();
    await $(element).click();
  }
}

module.exports = new BaseElements();
