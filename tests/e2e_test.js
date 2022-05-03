/**************************************************/

/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Automated Software Testing with Playwright (https://www.udemy.com/course/automated-software-testing-with-playwright/)
* Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
*/

/**************************************************/

const LoginPage = require('../pages/LoginPage')

Feature('Zero Bank Application - E2E Tests')

// Before Hook -> Executes before Scenario execution
Before(({ I }) => {
  console.log('BEFORE HOOK')
  I.amOnPage('http://zero.webappsecurity.com/index.html')
})


// After Hook -> Executes after Scenario execution
After(({ I }) => {
  console.log('AFTER HOOK')
})

// Scenario
Scenario('Login Test - Negative', ({ I, LoginPage }) => {
  
  // Click on Sign in button
  I.click('#signin_button')
  
  // seeElement() -> This method is used to put an Assertion: Element having CSS Selector '#login_form' must be present
  I.seeElement('#login_form')

  LoginPage.submitLogin('invalid username', 'invalid password')

  LoginPage.assertLoginFormIsVisible()

  // seeElement() -> This method is used to put an Assertion: Element having CSS Selector '.alert-error' must be present
  I.seeElement('.alert-error')

})
