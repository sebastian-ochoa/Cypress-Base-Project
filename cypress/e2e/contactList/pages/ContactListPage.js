class ContactListPage {
  visit() {
    cy.visit("/contactList")
  }

  getContactListTbl() {
    return cy.get('table.contactTable')
  }

  getContactRowByName(name) {
    return cy.get('tr.contactTableBodyRow').contains(name)
  }

  getAddContactBtn() {
    return cy.get('button[id="add-contact"]')
  }

  clickAddContactBtn() {
    this.getAddContactBtn().click()
  }
}

export default ContactListPage;
