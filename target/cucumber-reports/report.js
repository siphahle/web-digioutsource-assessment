$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signInWithEmptyForm.feature");
formatter.feature({
  "line": 1,
  "name": "As a QA, I would like to verify all negative scenarios for login",
  "description": "Scenario : Scenario: Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it\r\ncontains is as expected\r\n  Given : a user loads the website\r\n  When :  a user clicks on the sign in link on the navigation top bar\r\n  When : a user clicks on sign in btn without entering username and password\r\n  Then : validation error messages are displayed",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login",
  "keyword": "Feature"
});
formatter.uri("verifyNegativeScenairosLogin.feature");
formatter.feature({
  "line": 1,
  "name": "As a QA, I would like to verify all negative scenarios for login",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Scenario: Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;scenario:-select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": ": a user has loaded the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": ":  a user clicks on the sign in link on the nav top bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": ": a user enters unregistered \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ": a user enters invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": ": a user clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "an error is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;scenario:-select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;scenario:-select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;1"
    },
    {
      "cells": [
        "ginger",
        "123456"
      ],
      "line": 13,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;scenario:-select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Scenario: Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;scenario:-select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": ": a user has loaded the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": ":  a user clicks on the sign in link on the nav top bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": ": a user enters unregistered \"ginger\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ": a user enters invalid \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": ": a user clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "an error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyNegativeScenairosLoginSteps._a_user_has_loaded_the_website()"
});
formatter.result({
  "duration": 13433298500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyNegativeScenairosLoginSteps._a_user_clicks_on_the_sign_in_link_on_the_nav_top_bar()"
});
formatter.result({
  "duration": 98096100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ginger",
      "offset": 30
    }
  ],
  "location": "VerifyNegativeScenairosLoginSteps._a_user_enters_unregistered_something(String)"
});
formatter.result({
  "duration": 4446074600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    }
  ],
  "location": "VerifyNegativeScenairosLoginSteps._a_user_enters_invalid_something(String)"
});
formatter.result({
  "duration": 90758400,
  "status": "passed"
});
formatter.match({
  "location": "VerifyNegativeScenairosLoginSteps._a_user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 89728800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyNegativeScenairosLoginSteps.an_error_is_displayed()"
});
formatter.result({
  "duration": 45817200,
  "status": "passed"
});
formatter.after({
  "duration": 690403600,
  "status": "passed"
});
formatter.after({
  "duration": 89100,
  "status": "passed"
});
});