package pageobjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {

	WebDriver driver;

	@FindBy(id = "hotelName")
	public WebElement hotelName;
	@FindBy(id = "address")
	public WebElement hotelAddress;
	@FindBy(id = "owner")
	public WebElement owner;
	@FindBy(id = "phone")
	public WebElement phone;
	@FindBy(id = "email")
	public WebElement email;
	@FindBy(id = "createHotel")
	public WebElement createHotel;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void createANewHotelWith(String hotel, String address,
			String ownerName, String phoneNumber, String emailAddress) {
		hotelName.sendKeys(hotel);
		hotelAddress.sendKeys(address);
		owner.sendKeys(ownerName);
		phone.sendKeys(phoneNumber);
		email.sendKeys(emailAddress);
		createHotel.click();
	}
	
	public void deleteHotel(String hotelName) {
		driver.findElement(By.xpath("//*[@class='hotelRow']//p[contains(text(),'"+ hotelName + "')]//..//..//..//div[2]//span")).click();
	}

	
}
