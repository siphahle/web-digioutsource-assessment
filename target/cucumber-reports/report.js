$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchSportsRelatedArticles.feature");
formatter.feature({
  "line": 1,
  "name": "As a sports user, I would like to read about all articles related to sports",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page.",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports;use-the-search-option-to-find-all-articles-related-to-‘sports’.-output-the-first-heading-and-the-last-heading-returned-on-the-page.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": ": user  has loaded the browser the website is running",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": ": user enters sports on the search field",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": ": user clicks on the search icon a list of articles is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": ": user verifies the first article on the page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ": user verifies the last article on the page",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSportsRelatedArticlesSteps._user_has_loaded_the_browser_the_website_is_running()"
});
formatter.result({
  "duration": 14253528700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSportsRelatedArticlesSteps._user_enters_sports_on_the_search_field()"
});
formatter.result({
  "duration": 119639300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSportsRelatedArticlesSteps._user_clicks_on_the_search_icon_a_list_of_articles_is_displayed()"
});
formatter.result({
  "duration": 7270199400,
  "status": "passed"
});
formatter.match({
  "location": "SearchSportsRelatedArticlesSteps._user_verifies_the_first_article_on_the_page()"
});
formatter.result({
  "duration": 2045939200,
  "status": "passed"
});
formatter.match({
  "location": "SearchSportsRelatedArticlesSteps._user_verifies_the_last_article_on_the_page()"
});
formatter.result({
  "duration": 2042002100,
  "error_message": "java.lang.AssertionError: expected [The Women\u0027s Sport Show] but found [The Friday Sports Panel]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.digioutsource.assessment.stepDefinition.SearchSportsRelatedArticlesSteps._user_verifies_the_last_article_on_the_page(SearchSportsRelatedArticlesSteps.java:44)\r\n\tat ✽.When : user verifies the last article on the page(searchSportsRelatedArticles.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 699061100,
  "status": "passed"
});
formatter.after({
  "duration": 100300,
  "status": "passed"
});
formatter.after({
  "duration": 14400,
  "status": "passed"
});
formatter.uri("signInWithEmptyForm.feature");
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
