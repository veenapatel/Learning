Feature: CRM login with valid creds

Background:
Given user is on login page
When user provides "veenapatelnaluvala@gmail.com" and "Veenavasu@446"
And user clicks on login button
Then user should be on CRM home page

Scenario: Create new contact

And user hovers on vertical side bar
And user clicks on Contacts button
And user clicks on new icon
Then validate that create new contact page is opened 

