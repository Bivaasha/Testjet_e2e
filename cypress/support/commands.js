// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickLink', (label) => {
    cy.log('clicking link')
    cy.get('a').contains(label).click()
})

Cypress.Commands.add('downloadFile', (url, directory, fileName) => {
    return cy.getCookies().then((cookies) => {
        return cy.task('downloadFile', {
            url,
            directory,
            cookies,
            fileName,
        })
    })
})

Cypress.Commands.add('getSessionStorage', (key) => {
    cy.window().then((window) => window.sessionStorage.getItem(key))
})

Cypress.Commands.add('setSessionStorage', (key, value) => {
    cy.window().then((window) => {
        window.sessionStorage.setItem(key, value)
    })
})

Cypress.Commands.add('typeLogin', (user) => {
    cy.get('input[id=email]').type(user.email)
    cy.get('input[id=password]').type(user.password)
})

Cypress.Commands.add('login', () => {
    cy.clearCookie('token')
    cy.visit('https://app.testjet.ai/login', { pageLoadTimeout: 120000, responseTimeout: 120000, timeout: 120000, headers: { "Accept-Encoding": "gzip, deflate" } })
    cy.typeLogin({ email: 'bbiva@thetitantech.com', password: 'Ni@123456' })
    cy.get('button[type=button]').click()
    cy.wait(5000)
})

Cypress.Commands.add('logout', () => {
    // cy.window().its('localStorage').invoke('removeItem', 'session')
    cy.clearCookie('token')
    cy.visit('https://app.testjet.ai/login')
})