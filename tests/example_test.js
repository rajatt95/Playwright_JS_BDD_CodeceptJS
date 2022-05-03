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

Feature('Playwright_JS_BDD_CodeceptJS - Test suite')

Scenario('Should load example.com website', ({ I }) => {
   
    // amOnPage() -> Navigate to the application
    I.amOnPage('https://www.example.com')
    
    // see() -> This method is used to put an Assertion: Text Example must be present
    I.see('Example')

    // dontSee() -> This method is used to put an Assertion: Text Google must be absent
    I.dontSee('Google')
    
    // seeElement() -> This method is used to put an Assertion: Element having CSS Selector 'h1' must be present
    I.seeElement('h1')

    // dontSeeElement() -> This method is used to put an Assertion: Element having CSS Selector '#idontexist' must be absent
    I.dontSeeElement('#idontexist')
})

Scenario('Should load example.com website - second test', ({ I }) => {
    I.amOnPage('https://www.example.com')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#idontexist')

})

Scenario('Should load example.com website - third test - Faling intentionally', ({ I }) => {
    I.amOnPage('https://www.example.com')
    I.see('Example')
    
    // I.dontSee('Google')
    I.see('Google')
    
    I.seeElement('h1')
    I.dontSeeElement('#idontexist')
})
