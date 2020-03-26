package mercury.StepDefinition;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import mercury.BaseClass.ExcelRW;
import mercury.BaseClass.WrapperClass;
import mercury.Pages.LoginPage;


public class TC_04ValidLogin extends WrapperClass {
	static LoginPage lpom;
	static String[] data;
	
	@Given("^the user launch the application$")
	public void the_user_launch_the_application() throws Throwable {
		launchBrowser("chrome", "http://newtours.demoaut.com/index.php");
	}

	@When("^the user Enters the valid username password$")
	public void the_user_Enters_the_valid_username_password() throws Throwable {
		 lpom=PageFactory.initElements(driver, LoginPage.class); 
		 ExcelRW xl = new ExcelRW();
		  
		  data=new String[2]; 
		  int j=0; 
		  for (int i=28;i<=29;i++) 
		  {
		  
		  data[j]=xl.readXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", i, 3); 
		  System.out.println(data[j]);
		  j++; 
		  }
		  lpom.login(data);
	}

	@When("^click on signin$")
	public void click_on_signin() throws Throwable {
		lpom.loginButon();
	}

	@Then("^I validate the outcomes of valid login$")
	public void i_validate_the_outcomes_of_valid_login() throws Throwable {
		ExcelRW xl = new ExcelRW();
		String ar= lpom.logoff();
		String er= xl.readXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", 28, 4);
		System.out.println(ar+"\n"+er);
		xl.writeXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", ar, "Sheet1", 28,5);
		if(ar.equals(er))
		{
			System.out.println("Pass");
			xl.writeXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", "pass", "Sheet1", 28,6);
		}
		else
		{
			System.out.println("Fail");
			xl.writeXL("src\\test\\resources\\TestData\\MercuryExcel.xlsx", "fail", "Sheet1", 28,6);
		}
		screenShot("src\\test\\resources\\ScreenShots\\valildLogin.png");
		quit();
	}
}
