import ContactListPage from '../pages/ContactListPage'
import AddContactPage from '../pages/AddContactPage'


describe('@ContactList | Feature', () => {

  const contactListPage = new ContactListPage()
  const addContactPage = new AddContactPage()

  beforeEach(() => {
    cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
    cy.visit('/contactList')
  })

  it('@CList-01 | Add a new contact',() => {
    const newContactInfo = {
      name: 'Automated New',
      lastName: 'Contact',
      //birth: '',
      email: 'mail@sds.copm',
      phone: '8034542394',
      //street1: '',
      //street2: '',
      //city: '',
      //state: '',
      postal: '2234',
      country: 'US',
    }
    contactListPage.clickAddContactBtn()
    addContactPage.fillOutForm(newContactInfo)
    addContactPage.clickSubmitBtn()
    contactListPage.getContactRowByName(newContactInfo.name).should('be.visible')
  })

  it('@CList-02 | Delete a contact',() => {
    //Work in progress
    contactListPage.getContactRowByName('No Found').should('be.visible')
  })

  it.skip('@CList-03 | Edit a contact',() => {
    //Work in progress
  })
})