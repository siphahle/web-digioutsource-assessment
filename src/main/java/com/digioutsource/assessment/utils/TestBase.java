package com.digioutsource.assessment.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


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
