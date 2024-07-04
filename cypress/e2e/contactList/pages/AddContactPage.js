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
    formInfo.firstName && this.getNameFld().clear().type(formInfo.firstName)
    formInfo.lastName && this.getLastNameFld().clear().type(formInfo.lastName)
    formInfo.birthdate && this.getDateOfBirthFld().clear().type(formInfo.birthdate)
    formInfo.email && this.getEmailFld().clear().type(formInfo.email)
    formInfo.phone && this.getPhoneFld().clear().type(formInfo.phone)
    formInfo.street1 && this.getStreetAdd1Fld().clear().type(formInfo.street1)
    formInfo.street2 && this.getStreetAdd2Fld().clear().type(formInfo.street2)
    formInfo.city && this.getCityFld().clear().type(formInfo.city)
    formInfo.stateProvince && this.getStateOrProvinceFld().clear().type(formInfo.stateProvince)
    formInfo.postalCode && this.getPostalCodeFld().clear().type(formInfo.postalCode)
    formInfo.country && this.getCountryFld().clear().type(formInfo.country)
  }

  clickSubmitBtn(){
    this.getSubmitBtn().click()
  }
  //#endregion

}

export default AddContactPage;
