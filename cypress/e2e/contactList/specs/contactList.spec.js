import ContactListPage from '../pages/ContactListPage'
import AddContactPage from '../pages/AddContactPage'
import ContactDetailsPage from '../pages/ContactDetailsPage'


describe('@ContactList | Feature', () => {

  const contactListPage = new ContactListPage()
  const addContactPage = new AddContactPage()
  const contactDetailsPage = new ContactDetailsPage()

  let newContactInfo = {}

  beforeEach(() => {
    cy.intercept('GET','/contacts').as('contactsJson')
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
    cy.visit('/contactList')
    cy.wait('@contactsJson').then((res) => {
      cy.deleteAllContacts(res.response.body)
    })
    newContactInfo = {
      firstName: 'Automated New',
      lastName: 'Contact',
      email: 'mail@sds.copm',
      phone: '8034542394',
      postalCode: '2234',
      country: 'US',
    }
  })

  it('@CList-01 @Smoke | Add a new contact',() => {
    contactListPage.clickAddContactBtn()
    addContactPage.fillOutForm(newContactInfo)
    addContactPage.clickSubmitBtn()
    //Assertions
    contactListPage.getContactRowByName(newContactInfo.firstName).should('not.be.visible')
  })

  it('@CList-02 @Regression | Delete a contact',() => {
    newContactInfo.firstName = 'Automated API'
    cy.createContact(newContactInfo)
    cy.reload()
    contactListPage.clickContactByName(newContactInfo.firstName)
    contactDetailsPage.clickDeleteContactBtn()
    //Assertions
    contactListPage.getContactRows().should('not.exist')
  })

  it('@CList-03 @Regression | Edit a contact',() => {
    newContactInfo.firstName = 'Automated API'
    const editContactInfo = {
      firstName: 'Automated Edited',
      lastName: 'Contact',
      postalCode: '4444',
      country: 'COL',
    }
    cy.createContact(newContactInfo)
    cy.reload()
    contactListPage.clickContactByName(newContactInfo.firstName)
    contactDetailsPage.clickEditContactBtn()
    addContactPage.fillOutForm(editContactInfo)
    addContactPage.clickSubmitBtn()
    contactDetailsPage.clickReturnBtn()

    //Assertions
    contactListPage.getContactRowByName(editContactInfo.firstName).should('be.visible')
  })
})