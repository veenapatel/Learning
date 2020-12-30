//package StepDefinitions;
//
//import cucumber.api.java.en.And;
//import cucumber.api.java.en.Then;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.interactions.Actions;
//
//
//public class CreateNewContact {
//	WebDriver driver;
//	
//	
//	@And("^user hovers on vertical side bar$")
//	public void user_hovers_on_verticalsidebarr()
//	{
//		
//		WebElement hover=driver.findElement(By.xpath("//div[@id='main-nav']"));
//		Actions action=new Actions(driver);
//		action.moveToElement(hover).perform();
//		
//	}
//	
//	@And("^user clicks on Contacts button$")
//	public void user_clicks_contacts_button()
//	{
//		driver.findElement(By.xpath("//div[@id='main-nav']/div[3]/a/span[text()='Contacts']")).click();
//	}
//	@And("^user clicks on new icon$")
//	public void user_clicks_newicon()
//	{
//		driver.findElement(By.xpath("//button[text()='New']")).click();
//	}
//
//	@Then("^validate that create new contact page is opened$")
//	public void new_contact_page_opened()
//	{
//		WebElement newContactPage=driver.findElement(By.xpath("//div[text()='Create New Contact']"));
//		if(newContactPage.isDisplayed())
//			System.out.println("Element is present");
//	}
//}
