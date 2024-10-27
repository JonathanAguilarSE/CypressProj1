/// <reference types='cypress'/>

describe('Validating Elements', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/project-1')
  })

  it('Validating contact us information', () => {
    cy.get('h1.is-size-3').should('have.text', 'Contact Us')
    cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
    cy.get('#email').should('have.text', 'info@techglobalschool.com')
    cy.get('#phone-number').should('have.text', '(224) 580-2150')
  })

  it('Validating full name input box', () => {
    cy.get('[placeholder*="name"]').should('be.visible')
    cy.get('[placeholder*="name"]').should('have.attr', 'required')
    cy.get('label[for="name"]').should('have.text', 'Full name *')
    cy.get('[placeholder*="name"]').should('have.attr', 'placeholder', 'Enter your full name')
  })

  it('Validating gender radio button', () => {
    cy.get('form > div:nth-child(2) > div > label:nth-child(1)').should('have.text', 'Gender *')
    cy.get('form > div:nth-child(2) > div > label:nth-child(2) > input').should('have.attr', 'required')
    cy.get('form > div:nth-child(2) > div > label:nth-child(2)').should('have.text', 'Male')
    cy.get('form > div:nth-child(2) > div > label:nth-child(3)').should('have.text', 'Female')
    cy.get('form > div:nth-child(2) > div > label:nth-child(4)').should('have.text', 'Prefer not to disclose')
    cy.get('form > div:nth-child(2) > div > label:nth-child(2) > input').should('be.enabled').should('not.be.checked')
    cy.get('form > div:nth-child(2) > div > label:nth-child(3) > input').should('be.enabled').should('not.be.checked')
    cy.get('form > div:nth-child(2) > div > label:nth-child(4) > input').should('be.enabled').should('not.be.checked')
  })

  it('Male button checked while others are not', () => {
    cy.get('form > div:nth-child(2) > div > label:nth-child(2) > input').check().should('be.checked')
    cy.get('form > div:nth-child(2) > div > label:nth-child(3) > input').should('not.be.checked')
    cy.get('form > div:nth-child(2) > div > label:nth-child(4) > input').should('not.be.checked')
  })

  it('Female button checked while others are not', () => {
    cy.get('form > div:nth-child(2) > div > label:nth-child(3) > input').check().should('be.checked')
    cy.get('form > div:nth-child(2) > div > label:nth-child(2) > input').should('not.be.checked')
    cy.get('form > div:nth-child(2) > div > label:nth-child(4) > input').should('not.be.checked')
  })
  
  it('Validating the address input box', () => {
    cy.get('input[placeholder*="address"]').should('be.visible').should('not.have.attr', 'required')
    cy.get('form > div:nth-child(3) > label').should('have.text', 'Address')
    cy.get('input[placeholder*="address"]').should('have.attr', 'placeholder',  'Enter your address')
  })
  
  it('Validating the email input box', () => {
    cy.get('input[placeholder*="email"]').should('be.visible').should('have.attr', 'required')
    cy.get('form > div:nth-child(4) > label').should('have.text', 'Email *')
    cy.get('input[placeholder*="email"]').should('have.attr', 'placeholder',  'Enter your email')
  })

  it('Validating phone input box', () => {
    cy.get('input[placeholder*="phone"]').should('be.visible').should('not.have.attr', 'required')
    cy.get('form > div:nth-child(5) > label').should('have.text', 'Phone')
    cy.get('input[placeholder*="phone"]').should('have.attr', 'placeholder',  'Enter your phone number')
  })

  it('Validating the message text area', () => {
    cy.get('.textarea').should('be.visible').should('not.have.attr', 'required')
    cy.get('form > div:nth-child(6) > label').should('have.text', 'Message')
    cy.get('.textarea').should('have.attr', 'placeholder',  'Type your message here...')
  })

  it('Validating consent checkbox', () => {
    cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
    cy.get('input[type*="checkbox"]').should('have.attr', 'required')
    // cy.get('input[type*="checkbox"]').should('be.enabled')
    cy.get('input[type*="checkbox"]').check().should('be.checked').uncheck().should('not.be.checked')
  })

  it('Validating Submit button', () => {
    cy.get('.button.is-link').should('be.visible').should('be.enabled').click()
    // cy.get('.button.is-link').click()
    cy.get('.button.is-link').should('have.text', 'SUBMIT')
  })

  it('Validating form submission', () => {
    cy.get('[placeholder*="name"]').type('John')
    cy.get('form > div:nth-child(2) > div > label:nth-child(2) > input').check()
    cy.get('input[placeholder*="address"]').type('123 Fake Street')
    cy.get('input[placeholder*="email"]').type('johndoe@gmail.com')
    cy.get('input[placeholder*="phone"]').type('212-777-7777')
    cy.get('.textarea').type('Who does not love Cypress, am I right?')
    cy.get('input[type*="checkbox"]').check()
    cy.get('.button.is-link').click()
    cy.get('.mt-5').should('be.visible').should('have.text', 'Thanks for submitting!')
  })

  
})