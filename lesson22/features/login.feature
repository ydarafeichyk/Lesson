Feature: Webdriverio website testing

  Background:
  Given I navigate to "https://webdriver.io/" page

  Scenario: Check the title on the main page

  Then I expect that the title is "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"

  Scenario: Check the title on the API Page

    When I click "Api Page > Api Link" button
    Then I expect that the title is "Introduction | WebdriverIO"

  Scenario: Check the url must contain versions after going to the Version Page

  When I click "Version Page > Version Button" button
  Then I expect that the url is "https://webdriver.io/versions"

  Scenario: Check the url must contain gettingstarted after going to the page Getting started

  When I click "Main Page > Get Started Button" button
  Then I expect that the url to contain "gettingstarted"

  Scenario: Check the title must contain the word 'wait' after entering in the search field

  When I click "Search Page > Search Button" button
  When I fill in "Search Page > Search Input" field with "wait"
  When I click Enter key
  When I wait for search results "SearchResult Page > Search Titles"
  Then I expect that the title to contain "Auto-waiting | WebdriverIO"