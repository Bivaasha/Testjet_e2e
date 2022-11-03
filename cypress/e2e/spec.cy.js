//const { it } = require("mocha")

//sign up

describe("signup Test", () => {

  it("visits the app signup url", () => {

    cy.visit("https://app.testjet.ai/signup")

    //cy.contains("div.login-container-header", "SIGN UP");

    cy.get('#email').type('bbiva@thetitantech.com');

    cy.get('#password').type('Ni@123456');

    cy.contains('CREATE ACCOUNT').click();

    cy.wait(10000)

    cy.get('.p-invalid').should('have.text' , 'Email already exists')

    cy.get("a[href='/login']").click()

    cy.get('#email').type('bbiva@thetitantech.com');

    cy.get('#password').type('Ni@123456');

    cy.contains("LOG IN").click()

    //cy.get('input[placeholder="Enter First Name"]').type('Bivasha')

    //cy.get('input[placeholder="Enter Last Name"]').type('Biva')

    //cy.get('input[placeholder="Enter Phone Number"]').type('9998255874')

    //cy.get('input[placeholder="Enter Company Name"]').type('Titan Technologies')

    //cy.get('input[placeholder="Enter Industry Name"]').type('Tech')

    //cy.contains('span[class ="p-dropdown-label p-inputtext"]', 'United States').click()

    //cy.contains('United States').click()

    //cy.contains('span[class="p-dropdown-label p-inputtext p-placeholder"]' , 'Select State').click()

    //cy.contains('Arizona').click()

    //cy.get('input[placeholder="Enter Address 01"]').type('Arizona house-1')

    //cy.get('input[placeholder="Enter Zip Code"]').type('1221')

    //cy.contains('APPLY SETTINGS').click()

    cy.url().should('contain', '/dashboard')

  })

})

//sign in


describe('login into the app', () => {
  it('logs you in', () => {

    cy.visit('https://app.testjet.ai/')
    cy.get('#email').type('bbiva@thetitantech.com')
    cy.get('#password').type('Ni@123456')
    cy.contains("LOG IN").click()
    cy.wait(8000)
    cy.url().should('contain' , '/dashboard')
  })
})

// forgot password

//describe("Dashboard Test", () => {
  //it("passwrod reset flow", () =>{

      //cy.visit('https://app.testjet.ai/')
      //cy.wait(10000)
      //const forgotp= cy.get('.float-right')
      //forgotp.should('be.visible')
      //forgotp.click()
      //cy.wait(2000)
      //cy.get('.forgot-password-details').should('be.visible')
      //cy.get('input[placeholder="Enter Email"]').eq(1).type('bbiva@thetitantech.com')
      //cy.contains('CONFIRM').click()
      //cy.wait(10000)
      //cy.get('.check-email-container-detail').should('be.visible')
      //cy.visit('/reset-password?id=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJiaXZhQHRoZXRpdGFudGVjaC5jb20iLCJvdHAiOjg5NDQ1OSwiaWF0IjoxNjY3MTIyODE3LCJleHAiOjE2NjcxMjU1MTd9.rlFR21LoJKiEubX83rUeao5DH1pVGeQtCAMo3LnPMLI')

      //cy.get('input[placeholder="Enter OTP"]').type('746222')
      //cy.get('input[placeholder="New Password"]').type('Ni@123456')
      //cy.get('input[placeholder="Confirm Password"]').type('Ni@123456')
      //cy.wait(2000)
      //cy.contains('span[class ="p-button-label"]', 'RESET PASSWORD').click()
      //cy.login()
      //cy.url().should('contain' , '/dashboard')
//  })
//})

//dashboard

describe('Dashboard check' , () =>{
  it('checks stats', () =>{
    cy.visit('https://app.testjet.ai/')
    cy.get('#email').type('bbiva@thetitantech.com')
    cy.get('#password').type('Ni@123456')
    cy.contains("LOG IN").click()
    cy.wait(8000)
    cy.get('b').contains('Total Test Runs')
    cy.get('b').contains('Total Passed Tests')
    cy.get('b').contains('Total Failed Tests')
    cy.get('b').contains('Reported Tickets')
    cy.get('.live-runs').should('have.text' , 'Live Runs')
    cy.get('.last-executed-tests-header').should('have.text', 'Last Executed Runs')
    cy.get('.project-status-header').should('have.text', 'Project Status')
    cy.contains('span[class="p-dropdown-label p-inputtext"]' , 'All').should('be.visible')
    cy.contains('span[class="p-dropdown-label p-inputtext"]' , 'Last 24 hours').should('be.visible')
    cy.contains('Go To Test Runs').click()
    cy.wait(8000)
    cy.url().should('contain', '/test-runs')
 })
})

//project create

describe("Create Project", () => {
  it('Creates Project', () => {

      cy.visit('https://app.testjet.ai/')
      cy.get('#email').type('bbiva@thetitantech.com')
      cy.get('#password').type('Ni@123456')
      cy.contains("LOG IN").click()
      cy.wait(8000)
      cy.contains('span[class="p-button-label"]' , 'Create Project').click()
      cy.get('input[placeholder="Enter Project Name"]').type('Project 03')
      cy.get('input[placeholder="Enter Base URL"]').type('https://mui.com/')
      cy.wait(2000)
      cy.contains('span[class="p-button-label"]' , 'CREATE PROJECT').click()
      cy.wait(2000)
      cy.get('.project').should('is.visible')
    })
})

//create test case

describe("Create Test Case", () => {
  it('creates new test case', () => {

      cy.visit('https://app.testjet.ai/')
      cy.get('#email').type('bbiva@thetitantech.com')
      cy.get('#password').type('Ni@123456')
      cy.contains("LOG IN").click()
      cy.wait(8000)
      cy.contains('Project').click() 
      cy.contains('Test Cases').click() 
      cy.contains('NEW TEST').click()
      cy.wait(3000)
      cy.get('input[placeholder="Enter Test Name"]').type('test 01')
      cy.get('input[placeholder="Select Resolution"]').click()
      cy.contains('1280 x 720').click()
      cy.contains('span[class="p-button-label"]' , 'CREATE TEST CASE').click()
      
      
  })
})
// record case


describe("Record Test Case", () => {
      it('records new test case', () => {
      for(let i=10;;i++)
      {
        cy.visit('https://app.testjet.ai/')
        cy.get('#email').type('bbiva@thetitantech.com')
        cy.get('#password').type('Ni@123456')
        cy.contains("LOG IN").click()
        cy.wait(8000)
        cy.contains('Project').click() 
        cy.contains('Test Cases').click({force: true}) 
        cy.wait(10000)
        cy.contains('NEW TEST').click()
        cy.wait(3000)
        cy.get('input[placeholder="Enter Test Name"]').type('test'+ i)
        cy.get('input[placeholder="Select Resolution"]').click()
        cy.contains('1280 x 720').click()
        cy.contains('span[class="p-button-label"]' , 'CREATE TEST CASE').click()
        cy.get('button[class*="p-button p-component p-button-icon-only p-button-rounded p-button-outlined record-icon"]').click()
      //cy.get('a[href*="https://chrome.google.com/webstore/detail/testjet/nfpikmjhnlbdljobpkdfeddgjmkmdcdo"]').click()
      }
    })
})

// team management

describe("invitation test", () => {
it('invites member', () => {

    cy.visit('https://app.testjet.ai/')
    cy.get('#email').type('bbiva@thetitantech.com')
    cy.get('#password').type('Ni@123456')
    cy.contains("LOG IN").click()
    cy.wait(8000)
    cy.contains('Team').click()
    cy.wait(6000)
    cy.contains('Invite').click()
    cy.wait(5000)
    cy.get('input[placeholder="Enter Email Address"]').type('shossain@thetitantech.com')
    cy.get('[role="checkbox"]').click({ force: true, multiple: true})
    cy.contains('span[class="p-dropdown-label p-inputtext p-placeholder"]' , 'Select Role').click()
    cy.get('[aria-label="TESTER"]').click()
    cy.contains('SEND INVITE').click()
    cy.get('.p-invalid').should('have.text' , 'A member with this email already exists.')
    cy.wait(10000)
    //negative testing
   // cy.get('.p-invalid').should('have.text' , 'A member with this email already exists.')
    })
})
describe("edit member test", () => {
  it('edits member', () => {

    cy.visit('https://app.testjet.ai/')
    cy.get('#email').type('bbiva@thetitantech.com')
    cy.get('#password').type('Ni@123456')
    cy.contains("LOG IN").click()
    cy.wait(8000)
    cy.contains('Team').click()
    cy.contains('Edit').click()
    cy.wait(5000)
    cy.get('[class="p-checkbox-box p-component"]').click({ force: true, multiple: true})
    cy.wait(3000)
    cy.contains('span[class="p-dropdown-label p-inputtext"]' , 'TESTER').click({force: true})
    cy.contains('ADMIN').click()
    //cy.contains('SAVE CHANGES').click()
  })
})
