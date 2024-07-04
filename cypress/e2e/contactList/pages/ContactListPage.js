class ContactListPage {
  visit() {
    cy.visit("/contactList")
  }

  //#region Getters
  getContactListTbl() {
    return cy.get('table.contactTable')
  }

  getContactRows() {
    return cy.get('tr.contactTableBodyRow')
  }

  getContactRowByName(name) {
    return cy.get('tr.contactTableBodyRow').contains(name)
  }

  getAddContactBtn() {
    return cy.get('button[id="add-contact"]')
  }
  //#endregion

  //#region Actions
  clickAddContactBtn() {
    this.getAddContactBtn().click()
  }

  clickContactByName(name){
    this.getContactRowByName(name).click()
  }
  //#endregion
}

export default ContactListPage;
