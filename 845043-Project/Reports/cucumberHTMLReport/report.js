$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/Mercury.Feature");
formatter.feature({
  "line": 2,
  "name": "Mercury Tours Website",
  "description": "",
  "id": "mercury-tours-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@MercuryTours"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To Register",
  "description": "",
  "id": "mercury-tours-website;to-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the MercuryTours Registration page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user fills all the Details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "TC_01Register.the_user_launch_the_application_in_the_browser()"
});
formatter.result({
  "duration": 13819010100,
  "status": "passed"
});
formatter.match({
  "location": "TC_01Register.the_user_open_the_MercuryTours_Registration_page()"
});
formatter.result({
  "duration": 8225454501,
  "status": "passed"
});
formatter.match({
  "location": "TC_01Register.the_user_fills_all_the_Details()"
});
formatter.result({
  "duration": 1043723600,
  "status": "passed"
});
formatter.match({
  "location": "TC_01Register.click_on_the_Register_button()"
});
formatter.result({
  "duration": 5066328300,
  "status": "passed"
});
formatter.match({
  "location": "TC_01Register.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 16482160600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d/html/body/div/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[3]/td/p[2]/font\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAGHAV\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat mercury.Pages.RegistrationPages.actRes(RegistrationPages.java:80)\r\n\tat mercury.StepDefinition.TC_01Register.i_validate_the_outcomes(TC_01Register.java:56)\r\n\tat ✽.Then I validate the outcomes(src/main/resources/Feature/Mercury.Feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "To Retrive HomeTable",
  "description": "",
  "id": "mercury-tours-website;to-retrive-hometable",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user launches the application in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Read the Hometable",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "write the table in ExcelSheey",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I validate the outcomes of Retrived Table",
  "keyword": "Then "
});
formatter.match({
  "location": "TC_02HomeTable.user_launches_the_application_in_browser()"
});
