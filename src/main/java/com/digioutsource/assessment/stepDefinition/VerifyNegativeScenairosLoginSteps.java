package com.digioutsource.assessment.stepDefinition;


import com.digioutsource.assessment.utils.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import cucumber.api.java.After;

public class VerifyNegativeScenairosLoginSteps {
    @Given("^: a user has loaded the website$")
    public void _a_user_has_loaded_the_website()  {

        TestBase.setUp();
        Assert.assertEquals(TestBase.driver.getTitle(),"Scores & Fixtures - Football - BBC Sport");

    }

    @When("^:  a user clicks on the sign in link on the nav top bar$")
    public void _a_user_clicks_on_the_sign_in_link_on_the_nav_top_bar(){
        TestBase.driver.findElement(By.id("idcta-username")).click();

    }

    @When("^: a user enters unregistered \"([^\"]*)\"$")
    public void _a_user_enters_unregistered_something(String username) {
        TestBase.driver.findElement(By.id("user-identifier-input")).sendKeys(username);
    }

    @When("^: a user enters invalid \"([^\"]*)\"$")
    public void _a_user_enters_invalid_something(String password){
        TestBase.driver.findElement(By.id("password-input")).sendKeys(password);

    }

    @When("^: a user clicks on sign in button$")
    public void _a_user_clicks_on_sign_in_button() {
        TestBase.driver.findElement(By.id("submit-button")).click();
    }

    @Then("^an error is displayed$")
    public void an_error_is_displayed(){

        String actual_msg= TestBase.driver.findElement(By.xpath("//*[@id=\"form-message-password\"]/p")).getText();
        String expect="Something's missing. Please check and try again.";
        Assert.assertEquals(actual_msg, expect);

    }
    @After
    public static void tearDown(){
        TestBase.driver.quit();
    }


}
