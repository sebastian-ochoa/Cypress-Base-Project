class LoginPage {
  visit() {
    cy.visit("/")
  }

  getPasswordFld() {
    return cy.get(`[data-testid=SignInPasswordField]`)
  }

  getSingInBtn() {
    return cy.get(`[data-testid=SignInPasswordError]`)
  }

  fillPassword(value) {
    this.getPasswordFld().clear()
    this.getPasswordFld().type(value)
  }

  submit() {
    this.getSingInBtn().click()
  }
}

//export default LoginPage;
