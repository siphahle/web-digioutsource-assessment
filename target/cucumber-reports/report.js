$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addUser.feature");
formatter.feature({
  "line": 1,
  "name": "Add new user to the table",
  "description": "",
  "id": "add-new-user-to-the-table",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Add user to the list",
  "description": "",
  "id": "add-new-user-to-the-table;add-user-to-the-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "a user has launched the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user checks a username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "a user clicks on the add user button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "a user populate firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user populate surname \"\u003csurname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user populate username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user populate password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user select a company \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user choose a role \"\u003crole\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a user populate email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a user populate cellphone \"\u003ccellphoneno\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a user saves a created user",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a user checks if a user is added \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "add-new-user-to-the-table;add-user-to-the-list;",
  "rows": [
    {
      "cells": [
        "firstname",
        "surname",
        "username",
        "password",
        "company",
        "role",
        "email",
        "cellphoneno"
      ],
      "line": 20,
      "id": "add-new-user-to-the-table;add-user-to-the-list;;1"
    },
    {
      "cells": [
        "FName1",
        "LName1",
        "User1",
        "Pass1",
        "Company AAA",
        "Admin",
        "admin@mail.com",
        "082555"
      ],
      "line": 21,
      "id": "add-new-user-to-the-table;add-user-to-the-list;;2"
    },
    {
      "cells": [
        "FName2",
        "LName2",
        "User2",
        "Pass2",
        "Company BBB",
        "Customer",
        "customer@mail.com",
        "083444"
      ],
      "line": 22,
      "id": "add-new-user-to-the-table;add-user-to-the-list;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Add user to the list",
  "description": "",
  "id": "add-new-user-to-the-table;add-user-to-the-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "a user has launched the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user checks a username \"User1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "a user clicks on the add user button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "a user populate firstname \"FName1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user populate surname \"LName1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user populate username \"User1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user populate password \"Pass1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user select a company \"Company AAA\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user choose a role \"Admin\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a user populate email \"admin@mail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a user populate cellphone \"082555\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a user saves a created user",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a user checks if a user is added \"User1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddUserSteps.a_user_has_launched_the_browser()"
});
formatter.result({
  "duration": 15099366400,
  "error_message": "java.lang.AssertionError: expected [Protractor practice website - WebTables] but found [Scores \u0026 Fixtures - Football - BBC Sport]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.digioutsource.assessment.stepDefinition.AddUserSteps.a_user_has_launched_the_browser(AddUserSteps.java:18)\r\n\tat ✽.Given a user has launched the browser(addUser.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "User1",
      "offset": 26
    }
  ],
  "location": "AddUserSteps.a_user_checks_a_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserSteps.a_user_clicks_on_the_add_user_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FName1",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.a_user_populate_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LName1",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.a_user_populate_surname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User1",
      "offset": 26
    }
  ],
  "location": "AddUserSteps.a_user_populate_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass1",
      "offset": 26
    }
  ],
  "location": "AddUserSteps.a_user_populate_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Company AAA",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.a_user_select_a_company(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 22
    }
  ],
  "location": "AddUserSteps.a_user_choose_a_role(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@mail.com",
      "offset": 23
    }
  ],
  "location": "AddUserSteps.a_user_populate_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "082555",
      "offset": 27
    }
  ],
  "location": "AddUserSteps.a_user_populate_cellphone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserSteps.a_user_saves_a_created_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User1",
      "offset": 34
    }
  ],
  "location": "AddUserSteps.a_user_checks_if_a_user_is_added(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 717248600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Add user to the list",
  "description": "",
  "id": "add-new-user-to-the-table;add-user-to-the-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "a user has launched the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user checks a username \"User2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "a user clicks on the add user button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "a user populate firstname \"FName2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user populate surname \"LName2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user populate username \"User2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user populate password \"Pass2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a user select a company \"Company BBB\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user choose a role \"Customer\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a user populate email \"customer@mail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a user populate cellphone \"083444\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a user saves a created user",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a user checks if a user is added \"User2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddUserSteps.a_user_has_launched_the_browser()"
});
