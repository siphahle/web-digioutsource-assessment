Feature:  As a QA, I would like to verify all negative scenarios for login
  Scenario : Scenario: Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it
  contains is as expected
    Given : a user loads the website
    When :  a user clicks on the sign in link on the navigation top bar
    When : a user clicks on sign in btn without entering username and password
    Then : validation error messages are displayed



