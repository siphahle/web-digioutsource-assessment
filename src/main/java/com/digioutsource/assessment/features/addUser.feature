Feature: Add new user to the table

  Scenario Outline: Add user to the list
    Given a user has launched the browser
    When a user checks a username "<username>"
    When a user clicks on the add user button
    And a user populate firstname "<firstname>"
    And a user populate surname "<surname>"
    And a user populate username "<username>"
    And a user populate password "<password>"
    And a user select a company "<company>"
    And a user choose a role "<role>"
    And a user populate email "<email>"
    And a user populate cellphone "<cellphoneno>"
    And a user saves a created user
    And a user checks if a user is added "<username>"


    Examples:
      | firstname | surname | username | password | company     | role     | email             | cellphoneno |
      | FName1    | LName1  | User1    | Pass1    | Company AAA | Admin    | admin@mail.com    | 082555      |
      | FName2    | LName2  | User2    | Pass2    | Company BBB | Customer | customer@mail.com | 083444      |