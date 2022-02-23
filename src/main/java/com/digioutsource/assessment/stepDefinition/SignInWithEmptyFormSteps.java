package com.digioutsource.assessment.stepDefinition;


import com.digioutsource.assessment.utils.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;


public class SignInWithEmptyFormSteps {

    @Given("^: a user loads the website$")
    public void _a_user_loads_the_website(){
        TestBase.setUp();
        Assert.assertEquals(TestBase.driver.getTitle(),"Scores & Fixtures - Football - BBC Sport");

    }

    @When("^:  a user clicks on the sign in link on the navigation top bar$")
    public void _a_user_clicks_on_the_sign_in_link_on_the_navigation_top_bar(){
        TestBase.driver.findElement(By.id("idcta-username")).click();

    }

    @When("^: a user clicks on sign in btn without entering username and password$")
    public void _a_user_clicks_on_sign_in_btn_without_entering_username_and_password(){
        TestBase.driver.findElement(By.id("submit-button")).click();
    }

    @Then("^: validation error messages are displayed$")
    public void _validation_error_messages_are_displayed(){
        String formMsgGeneral= TestBase.driver.findElement(By.xpath("//*[@id=\"form-message-general\"]")).getText();
        String expect="Sorry, those details don't match. Check you've typed them correctly.";
        Assert.assertEquals(formMsgGeneral, expect);

        String usernameValMsg = TestBase.driver.findElement(By.xpath("//*[@id=\"form-message-username\"]/p")).getText();
        expect = "Something's missing. Please check and try again.";
        Assert.assertEquals(usernameValMsg,expect);

        String pwdValMsg = TestBase.driver.findElement(By.xpath("//*[@id=\"form-message-password\"]")).getText();
        expect ="Something's missing. Please check and try again.";
        Assert.assertEquals(pwdValMsg,expect);

    }
    @After
    public static void tearDown(){
        TestBase.driver.quit();
    }
}
