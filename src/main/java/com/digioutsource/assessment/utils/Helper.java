package com.digioutsource.assessment.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class Helper {
    public static List<WebElement> table(String header){
        int columnNo = -1;
        List<WebElement> tableHeaders = TestBase.driver.findElements(By.xpath("//*[@class='smart-table table table-striped']/thead/tr/th"));

        int count = 1;
        for (WebElement tableHeader:tableHeaders) {
            if (tableHeader.getText().equals(header)){
                columnNo = count;
                break;
            }
            count++;
        }

        List<WebElement> tableData = TestBase.driver.findElements(By.xpath("//*[@class='smart-table table table-striped']/tbody/tr/td["+columnNo+"]"));

        return tableData;
    }
}
