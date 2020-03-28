package mercury.StepDefinition;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import mercury.BaseClass.ExcelRW;
import mercury.BaseClass.WrapperClass;
import mercury.Pages.LoginPage;


public class TC_05InvalidLogin extends WrapperClass{
	static LoginPage lpom;
	static String[] data;
	//To launch the browser
	@Given("^the user launch the application in browser$")
	public void the_user_launch_the_application_in_browser() throws Throwable {
		launchBrowser("chrome", "http://newtours.demoaut.com/index.php");
	}
//To fill the details
	@When("^the user Enters the Invalid username and password$")
	public void the_user_Enters_the_Invalid_username_and_password() throws Throwable {
		lpom =PageFactory.initElements(driver, LoginPage.class);
		ExcelRW xl = new ExcelRW();

		data=new String[2];
		int j=0; 
		for (int i=31;i<=32;i++) {

			data[j]=xl.readXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", i, 3); 
			System.out.println(data[j]);

			j++; }


		lpom.login(data);
	}
//To signin
	@When("^click on signin button$")
	public void click_on_signin_button() throws Throwable {
		lpom.loginButon();
	}
//For invalid login outcomes
	@Then("^I validate the outcomes of invalid login$")
	public void i_validate_the_outcomes_of_invalid_login() throws Throwable {
		String ar= lpom.invalidlogin();
		ExcelRW xl = new ExcelRW();
		String er= xl.readXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", 17, 4);
			System.out.println(ar+"\n"+er);
			xl.writeXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", ar, "Sheet1", 17,5);
			if(ar.equals(er))
			{
				System.out.println("Pass");
				xl.writeXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", "pass", "Sheet1", 17,6);
			}
			else
			{
				System.out.println("Fail");
				xl.writeXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", "fail", "Sheet1", 17,6);
			}
			screenShot("src\\test\\resources\\ScreenShots\\Invalidlogin.png"); //To take screnshot
			quit();  //to close the browser
	}

}
