package com.digioutsource.assessment.stepDefinition;

import com.digioutsource.assessment.utils.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;

public class SearchSportsRelatedArticlesSteps {


    @Given("^: user  has loaded the browser the website is running$")
    public void _user_has_loaded_the_browser_the_website_is_running()  {
        TestBase.setUp();
        Assert.assertEquals(TestBase.driver.getTitle(),"Scores & Fixtures - Football - BBC Sport");
    }

    @When("^: user enters sports on the search field$")
    public void _user_enters_sports_on_the_search_field(){
        TestBase.driver.findElement(By.id("orb-search-q")).sendKeys("Sports");

    }
    @When("^: user clicks on the search icon a list of articles is displayed$")
    public void _user_clicks_on_the_search_icon_a_list_of_articles_is_displayed(){
        TestBase.driver.findElement(By.id("orb-search-button")).click();

    }
    @When("^: user verifies the first article on the page$")
    public void _user_verifies_the_first_article_on_the_page()throws Throwable{
        Thread.sleep(2000);
        String searchSportArticles= TestBase.driver.findElement(By.xpath("//*[@id=\"main-content\"]/div[1]/div[3]/div/div/ul/li[1]/div/div/div[1]/div[1]/a")).getText();
        String expect="BBC Sports News";
        Assert.assertEquals(searchSportArticles, expect);
        System.out.println(expect);
        System.out.println("****************************************************************************************");
    }

    @When("^: user verifies the last article on the page$")
    public void _user_verifies_the_last_article_on_the_page()throws Throwable{
        Thread.sleep(2000);
        String searchSportArticles= TestBase.driver.findElement(By.xpath("//*[@id=\"main-content\"]/div[1]/div[3]/div/div/ul/li[10]/div/div/div[1]/div[1]/a")).getText();
        String expect="The Friday Sports Panel";
        Assert.assertEquals(searchSportArticles, expect);
        System.out.println(expect);

    }
    @After
    public static void tearDown(){
        TestBase.driver.quit();
    }

}
