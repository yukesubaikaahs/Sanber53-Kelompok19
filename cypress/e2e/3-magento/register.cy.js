const registData = require('../../fixtures/registData.json')
describe('Testing Register', () => {

  it('Sukses Register',() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('Group')
    cy.get('#lastname').type('19')
    cy.get ('#email_address').type('19group@gmail.com')
    cy.get('#password').type('Testing123#')
    cy.get('#password-confirmation').type('Testing123#')
    cy.get('.action.submit.primary').click()
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')
  })

  it('Failed Register - Password Tidak Sama', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type('Testing')
    cy.get('.action.submit.primary').click()
    cy.get('#password-confirmation-error').should('contain','Please enter the same value again.')
  })

  it('Failed Register - Format Email Salah', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type('19group.com')
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#email_address-error').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  it('Failed Register - First Name Kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#firstname-error').should('contain','This is a required field.')
  })

  it('Failed Register - Last Name Kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#lastname-error').should('contain','This is a required field.')
  })

  it('Failed Register - Password Kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#password-error').should('contain','This is a required field.')
  })

  it('Failed Register - Password Konfirmasi Kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get ('#email_address').type(registData.email)
    cy.get('#password').type(registData.password)
    cy.get('.action.submit.primary').click()
    cy.get('#password-confirmation-error').should('contain','This is a required field.')
  })

  it('Failed Register - Email Kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type(registData.firstName)
    cy.get('#lastname').type(registData.lastName)
    cy.get('#password').type(registData.password)
    cy.get('#password-confirmation').type(registData.confPassword)
    cy.get('.action.submit.primary').click()
    cy.get('#email_address-error').should('contain','This is a required field.')
  })
})