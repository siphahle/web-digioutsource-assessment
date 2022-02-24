Feature: As a sports user, I would like to read about all articles related to sports
  Scenario: Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page.
    Given : user  has loaded the browser the website is running
    When : user enters sports on the search field
    And : user clicks on the search icon a list of articles is displayed
    When : user verifies the first article on the page
    When : user verifies the last article on the page