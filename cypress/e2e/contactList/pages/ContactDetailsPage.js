class ContactDetailsPage {
  visit() {
    cy.visit("/contactDetails")
  }

  //#region Getters
  //Another way of writing the getters
  elements = {
    editContactBtn:() => {return cy.get('button[id="edit-contact"]')},
    deleteContactBtn:() => {return cy.get('button[id="delete"]')},
    returnBtn:() => {return cy.get('button[id="return"]')},
  }
  //#endregion

  //#region Actions
  clickEditContactBtn() {
    cy.intercept('GET','/contacts/*').as('contactInfo')
    this.elements.editContactBtn().click()
    cy.wait('@contactInfo')
  }

  clickDeleteContactBtn(){
    this.elements.deleteContactBtn().click()
  }

  clickReturnBtn(){
    this.elements.returnBtn().click()
  }
  //#endregion
}

export default ContactDetailsPage;
  