Feature: Webdriverio website testing

  Background:
  Given I navigate to "https://webdriver.io/" page

  Scenario: Check the title on the main page

  Then I expect that the title is "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"

  Scenario: Check the title on the API page
    
    When I click "Api > Api Link" button
    Then I expect that the title is "Introduction | WebdriverIO"

  Scenario: Check the url must contain webdriverio after going to the page GitHub

  When I click "GitHubButton > GitHubLink" button
  And I switch to another window "webdriverio/webdriverio: Next-gen browser and mobile automation test framework for Node.js"
  Then I expect that the url is "https://github.com/webdriverio/webdriverio"

  Scenario: Check the url must contain gettingstarted after going to the page Getting started

  When I click "Main Page > Get Started Button" button
  Then I expect that the url to contain "gettingstarted"

  Scenario: Check the title must contain the word 'wait' after entering in the search field

  When I click "Search > Search Button" button
  When I fill in "Search > Search Input" field with "wait"
  When I click Enter key
  When I wait for search results "SearchResultPage > Search Titles"
  Then I expect that the title to contain "waitForExist"
