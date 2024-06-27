import ContactListPage from '../../contactList/pages/ContactListPage'

describe('@Login | Feature', () => {

  const contactListPage = new ContactListPage()

  it('@Log-00 | Checks if the login feature works properly before running the test suite',() => {
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
    cy.visit('/contactList')
    contactListPage.getContactListTbl().should('be.visible')
  })
})