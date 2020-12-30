package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDef {
	
	WebDriver driver;
	

	@Given("^user is on login page$")
	public void user_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Dell\\Downloads\\learning\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://ui.freecrm.com/");
		String loginTitle=driver.getTitle();
		Assert.assertEquals("Cogmento CRM", loginTitle);
		
		
	}
	
	@When("^user provides \"(.*)\" and \"(.*)\"$")
	public void user_provides_username_password(String username, String password)

	{
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	}
	
	@And("^user clicks on login button$")
	public void user_clicks_on_login()
	
	{
	driver.findElement(By.xpath("//div[text()='Login']")).click();	
	}

	@Then("^user should be on CRM home page$")
	public void user_should_be_on_CRM_page() throws InterruptedException
	
	{
		Thread.sleep(50);
		
		WebElement homePageVerify=driver.findElement(By.xpath("//div[@class='right menu']//span[text()='veena patel']"));
		if(homePageVerify.isDisplayed()) {
			System.out.println("Element is present");
		}
	
		String loginTitle=driver.getTitle();
		Assert.assertEquals("Cogmento CRM", loginTitle);
	}
	@And("^user hovers on vertical side bar$")
	public void user_hovers_on_verticalsidebarr()
	{
		
		WebElement hover=driver.findElement(By.xpath("//div[@id='main-nav']"));
		Actions action=new Actions(driver);
		action.moveToElement(hover).perform();
		
	}
	
	@And("^user clicks on Contacts button$")
	public void user_clicks_contacts_button()
	{
		driver.findElement(By.xpath("//div[@id='main-nav']/div[3]/a/span[text()='Contacts']")).click();
	}
	@And("^user clicks on new icon$")
	public void user_clicks_newicon()
	{
		driver.findElement(By.xpath("//button[text()='New']")).click();
	}

	@Then("^validate that create new contact page is opened$")
	public void new_contact_page_opened()
	{
		WebElement newContactPage=driver.findElement(By.xpath("//div[text()='Create New Contact']"));
		if(newContactPage.isDisplayed())
			System.out.println("Element is present");
	}
}
