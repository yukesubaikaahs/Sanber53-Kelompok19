import ProcessToCheckOut from "../../support/ProcessToCheckOut";
describe('Login', () => {

it('Failed Login - Login Menggunakan Data Kosong', () => {
  cy.visit('https://magento.softwaretestingboard.com/') 
  ProcessToCheckOut.SignIn()
  cy.get('#email')
  cy.get('#pass')
  cy.get('#send2').click()
  cy.wait(6000)

})

it('Failed Login - Login Menggunakan Email Kosong', () => {
  cy.visit('https://magento.softwaretestingboard.com/') 
  ProcessToCheckOut.SignIn()
  cy.get('#email')
  cy.get('#pass').type("test123")
  cy.get('#send2').click()
  cy.wait(6000)

})

it('Failed Login - Login Menggunakan Password Kosong', () => {
  cy.visit('https://magento.softwaretestingboard.com/') 
  ProcessToCheckOut.SignIn()
  cy.get('#email').type("19group@gmail.com")
  cy.get('#pass')
  cy.get('#send2').click()
  cy.wait(6000)

})

  it('Sukses Login - Menggunakan Valid Data', () => {
    cy.visit('https://magento.softwaretestingboard.com/') 
    ProcessToCheckOut.SignIn()
    cy.get('#email').type("19group@gmail.com")
    cy.get('#pass').type("Testing123#")
    cy.get('#send2').click()
  })

})