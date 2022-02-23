package com.digioutsource.assessment.utils;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;

import java.util.concurrent.TimeUnit;

public class TestBase {
    public static WebDriver driver;

    public static void setUp(){
        System.setProperty("webdriver.chrome.driver","resources\\driver\\chromedriver.exe");

        driver = new ChromeDriver();
        driver.get("https://www.bbc.com/sport/football/scores-fixtures");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
    }
}
