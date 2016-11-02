package pageobjects;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BasePage {
	
	WebDriver driver;

	@FindBy(linkText = "Hotel Management Platform")
	  public WebElement HotelManagementPlatformLink;
	@FindBy(linkText = "Login")
	  public WebElement loginLink;
	@FindBy(id = "search")
	  public WebElement searchText;
	
	public BasePage(WebDriver driver) {
	    this.driver = driver;
	    PageFactory.initElements(driver, this);
	}
	
	public List<WebElement> getNumberOfSearchResults(String hotelName) {
		searchText.sendKeys(hotelName);
		searchText.sendKeys(Keys.RETURN);
		List<WebElement> list = driver.findElements(By
				.xpath("//*[contains(text(),'" + hotelName + "')]"));
		return list;
	}
}
