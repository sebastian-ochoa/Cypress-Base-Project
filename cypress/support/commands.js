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

/**
 * Method to log in programmatically
 */
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

/**
 * Creates a new contact via API
 */
Cypress.Commands.add("createContact", (contactInfo) => {

  let contactJson = {
    firstName: contactInfo.name,
    lastName: contactInfo.lastName,
  }

  contactInfo.birthdate && (contactJson.birthdate = contactInfo.birthdate)
  contactInfo.email && (contactJson.email = contactInfo.email)
  contactInfo.phone && (contactJson.phone = contactInfo.phone)
  contactInfo.street1 && (contactJson.street1 = contactInfo.street1)
  contactInfo.street2 && (contactJson.street2 = contactInfo.street2)
  contactInfo.city && (contactJson.city = contactInfo.city)
  contactInfo.stateProvince && (contactJson.stateProvince = contactInfo.stateProvince)
  contactInfo.postalCode && (contactJson.postalCode = contactInfo.postalCode)
  contactInfo.country && (contactJson.country = contactInfo.country)

  cy.getCookie('token').should('have.property', 'value')

  let tokenCookie
  cy.getCookie('token').then((cookie) => {
    tokenCookie = cookie.value
    cy.request({
      method: 'POST',
      url:'/contacts',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenCookie}`,
      },
      body: contactInfo
    });
  })
});

/**
 * Creates a new contact via API
 */
Cypress.Commands.add("deleteAllContacts", (contactsRes) => {
  let tokenCookie

  cy.getCookie('token').then((cookie) => {
    tokenCookie = cookie.value
    
    contactsRes.forEach(contact => {
        cy.request({
          method: 'DELETE',
          url:`/contacts/${contact._id}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenCookie}`,
          }
        });
    });
  })
});