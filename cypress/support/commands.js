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

Cypress.Commands.add("login", (email, password) => {
  cy.request("POST", "/users/login", {
    email: email,
    password: password,
  }).then((res) => {
    window.localStorage.setItem("id", res.body.user._id);
    //Not used (necessary), but left as an example of what u could do:
    // const cookies = res.headers['set-cookie']
    // cookies.forEach(cookie => {
    //     const firstPart = cookie.split(';')[0]
    //     const separator = firstPart.indexOf('=')
    //     const name = firstPart.substring(0, separator)
    //     const value = firstPart.substring(separator + 1)
    //     console.debug('cookie', name, value)
    //     cy.setCookie(name, value)
    // })
  });
});
