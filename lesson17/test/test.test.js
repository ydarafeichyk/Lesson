const {Builder, Key, By, until} = require('selenium-webdriver');
const { expect } = require('chai');
 
describe(`Website chromedriver.chromium.org testing`, function () {
    let driver;
    beforeEach (async () => {
        driver = await new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
    });
    afterEach (async () => {
        await driver.close();
    });
    it(`Title should be ChromeDriver - WebDriver for Chrome on the ChromeDriver page`, async () => {
        await driver.get('https://chromedriver.chromium.org/home'); 
        await driver.sleep(5000);
        let title = await driver.getTitle();
        console.log(title);
        await driver.sleep(5000);
        expect(title).to.equal('ChromeDriver - WebDriver for Chrome');
    })
    it(`Title should be Chrome Extensions on the Chrome Extensions page`, async () => {
        await driver.get('https://chromedriver.chromium.org/home'); 
        await driver.sleep(5000);
        const headerButtonChromeExtension = await driver.findElement(By.xpath("(//a[@data-url='/extensions'])[2]"));
        await driver.sleep(5000);
        await driver.actions().click(headerButtonChromeExtension).perform();
        let title = await driver.getTitle();
        console.log(title);
        await driver.sleep(2000);
        expect(title).to.equal('ChromeDriver - WebDriver for Chrome - Chrome Extensions');
               
    })
    it('The first link must contain the word driver after entering in the search field', async() => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(5000);
        const searchButton = await driver.findElement(By.css('.Wdnjke.M9Bg4d .xjKiLb .Ce1Y1c'));
        await driver.actions().click(searchButton).perform();
        await driver.sleep(5000);
        const searchField = await driver.findElement(By.css("input[type='search']"));
        await searchField.sendKeys('driver');
        await driver.sleep(5000);
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.sleep(5000);
        const searchResultLink = await driver.findElement(By.path("(//div[@class='vH0yjd']//a)[1]"));
        await driver.sleep(5000);
        expect (await searchResultLink[0].getText()).to.contain('driver');
    })
     it(`Url must contain /mobile-emulation after going to the page Mobile Emulation`, async () => {
        await driver.get('https://chromedriver.chromium.org/home'); 
        await driver.sleep(5000);
        const headerButtonAddition = await driver.findElement(By.xpath("//*[text() = 'Дополнительно']"));
        await driver.actions().move({origin:headerButtonAddition}).perform();
        await driver.sleep(5000);
        const ButtonMobileEmulation = await driver.findElement(By.xpath("(//a[@data-url='/mobile-emulation'])[3]"));
        await driver.wait(until.elementIsVisible(ButtonMobileEmulation));
        await driver.sleep(5000);
        await ButtonMobileEmulation.click();
        await driver.sleep(5000);
        let getUrl = await driver.getCurrentUrl();
        console.log(getUrl);
        await driver.sleep(5000);
        expect(getUrl).to.equal('https://chromedriver.chromium.org/mobile-emulation');
    })
    
    
})