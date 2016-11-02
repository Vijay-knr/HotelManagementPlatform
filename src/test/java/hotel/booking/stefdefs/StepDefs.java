package hotel.booking.stefdefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import pageobjects.BasePage;
import pageobjects.HomePage;
import pageobjects.LoginPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs {

	WebDriver driver;

	@Before
	public void setUp() {
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@After
	public void tearDown() {
		driver.quit();
	}

	@Given("^that I am at \"(.*?)\"$")
	public void that_I_am_at(String url) {
		driver.get(url);
	}

	@Given("^that I have logged in as an \"(.*?)\" with password \"(.*?)\"$")
	public void that_I_have_logged_in_as_an_with_password(String userName,
			String password) throws Throwable {
		new BasePage(driver).loginLink.click();
		new LoginPage(driver).loginAs(userName, password);
	}

	@When("^I create a new hotel with \"(.*?)\",\"(.*?)\",\"(.*?)\",\"(.*?)\",\"(.*?)\"$")
	public void i_create_a_new_hotel_with(String hotelName,
			String hotelAddress, String owner, String phoneNumber,
			String emailAddress) throws Throwable {
		new HomePage(driver).createANewHotelWith(hotelName, hotelAddress,
				owner, phoneNumber, emailAddress);
	}

	@Then("^I should see hotel \"(.*?)\" created successfully$")
	public void i_should_see_hotel_created_successfully(String hotelName)
			throws Throwable {
		new BasePage(driver).HotelManagementPlatformLink.click();
		Assert.assertTrue("Hotel not created!", new BasePage(driver)
				.getNumberOfSearchResults(hotelName).size() > 0);
	}

	@When("^I delete a hotel with name \"(.*?)\"$")
	public void i_delete_a_new_hotel_with_name(String hotelName) {
		new BasePage(driver).HotelManagementPlatformLink.click();
		new HomePage(driver).deleteHotel(hotelName);
	}

	@Then("^I should see hotel \"(.*?)\" deleted successfully$")
	public void i_should_see_hotel_deleted_successfully(String hotelName) {
		Assert.assertTrue("Hotel not created!", new BasePage(driver)
				.getNumberOfSearchResults(hotelName).size() == 0);
	}

}
