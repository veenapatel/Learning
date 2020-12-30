$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Dell/eclipse-workspace/FreeCRM/src/main/java/Features/CRMLogin.feature");
formatter.feature({
  "line": 1,
  "name": "CRM login with valid creds",
  "description": "",
  "id": "crm-login-with-valid-creds",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "CRM user login",
  "description": "",
  "id": "crm-login-with-valid-creds;crm-user-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user provides \"veenapatelnaluvala@gmail.com\" and \"Veenavasu@446\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be on CRM home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user hovers on vertical side bar",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Contacts button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on new icon",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate that create new contact page is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_on_login_page()"
});
formatter.result({
  "duration": 30742837591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "veenapatelnaluvala@gmail.com",
      "offset": 15
    },
    {
      "val": "Veenavasu@446",
      "offset": 50
    }
  ],
  "location": "LoginStepDef.user_provides_username_password(String,String)"
});
formatter.result({
  "duration": 1146541365,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login()"
});
formatter.result({
  "duration": 245727022,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_CRM_page()"
});
formatter.result({
  "duration": 246331714,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027right menu\u0027]//span[text()\u003d\u0027veena patel\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINCTRL-GAIVQUE\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:53995}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b20b5633564b4582613dc7cec92a1e04\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027right menu\u0027]//span[text()\u003d\u0027veena patel\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions.LoginStepDef.user_should_be_on_CRM_page(LoginStepDef.java:54)\r\n\tat ✽.Then user should be on CRM home page(C:/Users/Dell/eclipse-workspace/FreeCRM/src/main/java/Features/CRMLogin.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.user_hovers_on_verticalsidebarr()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_contacts_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_newicon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.new_contact_page_opened()"
});
formatter.result({
  "status": "skipped"
});
});