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

const { I } = inject()

module.exports = {
   
  // Set Locators
  loginForm: '#login_form',
  username: '#user_login',
  password: '#user_password',
  submitButton: '.btn-primary',

  // Create page methods
  submitLogin(username, password) {
    I.fillField(this.username, username)
    I.fillField(this.password, password)
    I.click(this.submitButton)
  },

  assertLoginFormIsVisible() {
    I.seeElement(this.loginForm)
  },
}
