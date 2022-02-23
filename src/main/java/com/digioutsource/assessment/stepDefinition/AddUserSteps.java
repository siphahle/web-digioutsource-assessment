package com.digioutsource.assessment.stepDefinition;

import cucumber.api.java.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import cucumber.api.java.en.*;
import java.util.List;

import com.digioutsource.assessment.utils.Helper;
import com.digioutsource.assessment.utils.TestBase;

public class AddUserSteps{
    @Given("^a user has launched the browser$")
    public void a_user_has_launched_the_browser() {
        TestBase.setUp();
        Assert.assertEquals(TestBase.driver.getTitle(),"Protractor practice website - WebTables");
    }
    @When(("^a user checks a username \"([^\"]*)\"$"))
    public void a_user_checks_a_username(String username){
        List<WebElement> tableData = Helper.table("User Name");
        for (WebElement columnData:tableData) {
            Assert.assertFalse(columnData.getText().equals(username),username+" already exist");
        }
    }

    @When("^a user clicks on the add user button$")
    public void a_user_clicks_on_the_add_user_button() {
        TestBase.driver.findElement(By.cssSelector("button[ng-click='pop()']")).click();
    }

    @When("^a user populate firstname \"([^\"]*)\"$")
    public void a_user_populate_firstname(String firstname) {
        TestBase.driver.findElement(By.cssSelector("input[name='FirstName']")).sendKeys(firstname);
    }

    @When("^a user populate surname \"([^\"]*)\"$")
    public void a_user_populate_surname(String surname) {
        TestBase.driver.findElement(By.cssSelector("input[name='LastName']")).sendKeys(surname);
    }

    @When("^a user populate username \"([^\"]*)\"$")
    public void a_user_populate_username(String username) {
        TestBase.driver.findElement(By.cssSelector("input[name='UserName']")).sendKeys(username);
    }

    @When("^a user populate password \"([^\"]*)\"$")
    public void a_user_populate_password(String password) {
        TestBase.driver.findElement(By.cssSelector("input[name='Password']")).sendKeys(password);
    }

    @When("^a user select a company \"([^\"]*)\"$")
    public void a_user_select_a_company(String company) {
        if (company.toLowerCase().contains("aaa"))
            TestBase.driver.findElements(By.name("optionsRadios")).get(0).click();
        else if (company.toLowerCase().contains("bbb"))
            TestBase.driver.findElements(By.name("optionsRadios")).get(1).click();
    }

    @When("^a user choose a role \"([^\"]*)\"$")
    public void a_user_choose_a_role(String userRole) {
        WebElement role = TestBase.driver.findElement(By.name("RoleId"));
        Select selectRole = new Select(role);
        selectRole.selectByVisibleText(userRole);
    }

    @When("^a user populate email \"([^\"]*)\"$")
    public void a_user_populate_email(String email) {
        TestBase.driver.findElement(By.name("Email")).sendKeys(email);
    }

    @When("^a user populate cellphone \"([^\"]*)\"$")
    public void a_user_populate_cellphone(String phoneNumber) {
        TestBase.driver.findElement(By.name("Mobilephone")).sendKeys(phoneNumber);
    }

    @When("^a user saves a created user$")
    public void a_user_saves_a_created_user() {
        TestBase.driver.findElement(By.cssSelector("button[ng-click='save(user)']")).click();
    }

    @When("^a user checks if a user is added \"([^\"]*)\"$")
    public void a_user_checks_if_a_user_is_added(String username) {
        List<WebElement> tableData = Helper.table("User Name");

        for (int i = 0;i < 1;i++)
            Assert.assertTrue(tableData.get(i).getText().equals(username),username+" was not added");
    }

    @After
    public static void tearDown(){
        TestBase.driver.quit();
    }
}
