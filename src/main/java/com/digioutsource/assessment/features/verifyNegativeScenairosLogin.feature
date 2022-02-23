Feature:  As a QA, I would like to verify all negative scenarios for login
  Scenario Outline: Scenario: Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it
  contains is as expected
    Given : a user has loaded the website
    When :  a user clicks on the sign in link on the nav top bar
    And : a user is redirected to sign in page
    When : a user enters unregistered "<username>"
    When : a user enters invalid "<password>"
    When : a user clicks on sign in button
    Then an error is displayed

    Examples:
    |username | password    |
    |ginger   | 123456      |

