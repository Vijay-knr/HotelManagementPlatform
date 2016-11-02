package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	WebDriver driver;

	@FindBy(id = "username")
	public WebElement userName;
	@FindBy(id = "password")
	public WebElement password;
	@FindBy(id = "doLogin")
	public WebElement loginButton;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void loginAs(String name, String pwd) {
		userName.sendKeys(name);
		password.sendKeys(pwd);
		loginButton.click();
	}
}
