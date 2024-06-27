class AddContactPage {
  visit() {
    cy.visit('/addContact');
  }

  //#region Getters
  getNameFld(){
    return cy.get('input[id="firstName"]')
  }

  getLastNameFld(){
    return cy.get('input[id="lastName"]')
  }

  getDateOfBirthFld(){
    return cy.get('input[id="birthdate"]')
  }

  getEmailFld(){
    return cy.get('input[id="email"]')
  }

  getPhoneFld(){
    return cy.get('input[id="phone"]')
  }

  getStreetAdd1Fld(){
    return cy.get('input[id="street1"]')
  }

  getStreetAdd2Fld(){
    return cy.get('input[id="street2"]')
  }

  getCityFld(){
    return cy.get('input[id="city"]')
  }

  getStateOrProvinceFld(){
    return cy.get('input[id="stateProvince"]')
  }

  getPostalCodeFld(){
    return cy.get('input[id="postalCode"]')
  }

  getCountryFld(){
    return cy.get('input[id="country"]')
  }

  getSubmitBtn(){
    return cy.get('button[id="submit"]')
  }
  //#endregion

  //#region Actions
  fillOutForm(formInfo) {
    formInfo.name && this.getNameFld().type(formInfo.name)
    formInfo.lastName && this.getLastNameFld().type(formInfo.lastName)
    formInfo.birth && this.getDateOfBirthFld().type(formInfo.birth)
    formInfo.email && this.getEmailFld().type(formInfo.email)
    formInfo.phone && this.getPhoneFld().type(formInfo.phone)
    formInfo.street1 && this.getStreetAdd1Fld().type(formInfo.street1)
    formInfo.street2 && this.getStreetAdd2Fld().type(formInfo.street2)
    formInfo.city && this.getCityFld().type(formInfo.city)
    formInfo.state && this.getStateOrProvinceFld().type(formInfo.state)
    formInfo.postal && this.getPostalCodeFld().type(formInfo.postal)
    formInfo.country && this.getCountryFld().type(formInfo.country)
  }

  clickSubmitBtn(){
    this.getSubmitBtn().click()
  }
  //#endregion

}

export default AddContactPage;
