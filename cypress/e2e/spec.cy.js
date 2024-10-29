/// <reference types='cypress'/>

describe('Validating Elements', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/project-1')
  })

  it('Validating contact us information', () => {
    const contactInfo = [
      { selector: 'h1.is-size-3', text: 'Contact Us' },
      { selector: '#address', text: '2800 S River Rd Suite 310, Des Plaines, IL 60018' },
      { selector: '#email', text: 'info@techglobalschool.com' },
      { selector: '#phone-number', text: '(224) 580-2150' }
  ];

  contactInfo.forEach(({ selector, text }) => {
      cy.get(selector).should('have.text', text)
  })
    // let info = [ 'Contact Us', '2800 S River Rd Suite 310, Des Plaines, IL 60018', 'info@techglobalschool.com', '(224) 580-2150' ]
    // cy.get('h1.is-size-3', '#address', '#email', '#phone-number').each(($el, index) => {
    //   cy.wrap($el).should('have.text', info[index])
    // })
    // cy.get('h1.is-size-3').should('have.text', 'Contact Us')
    // cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
    // cy.get('#email').should('have.text', 'info@techglobalschool.com')
    // cy.get('#phone-number').should('have.text', '(224) 580-2150')
  })


  it('Validating full name input box', () => {
    cy.get('[placeholder*="name"]').should('be.visible').and('have.attr', 'placeholder', 'Enter your full name').and('have.attr', 'required')
    cy.get('label[for="name"]').should('have.text', 'Full name *')
    // cy.get('[placeholder*="name"]').should('have.attr', 'required')
    // cy.get('[placeholder*="name"]').should('have.attr', 'placeholder', 'Enter your full name')
  })


  it('Validating gender radio button', () => {
    cy.get('form div div .label').should('have.text', 'Gender *')
    cy.get('form div div label:nth-child(2) input').should('have.attr', 'required')
    
    const options = [ 'Male', 'Female', 'Prefer not to disclose' ]

        cy.get('.radio').each(($el, index) => {
            cy.wrap($el).should('have.text', options[index])
        })

        cy.get('form > div:nth-child(2) input').each(($el) => {
            cy.wrap($el).should('be.enabled').and('not.be.checked')
        })
    // cy.get('form > div:nth-child(2) > div > label:nth-child(2)').should('have.text', 'Male')
    // cy.get('form > div:nth-child(2) > div > label:nth-child(3)').should('have.text', 'Female')
    // cy.get('form > div:nth-child(2) > div > label:nth-child(4)').should('have.text', 'Prefer not to disclose')
    // cy.get('form > div:nth-child(2) > div > label:nth-child(2) > input').should('be.enabled').should('not.be.checked')
    // cy.get('form > div:nth-child(2) > div > label:nth-child(3) > input').should('be.enabled').should('not.be.checked')
    // cy.get('form > div:nth-child(2) > div > label:nth-child(4) > input').should('be.enabled').should('not.be.checked')
    
    // Male checked; others unchecked
    cy.get('form div div label input.mr-1').eq(0).check().should('be.checked')
    cy.get('form div div label input.mr-1').eq(1).should('not.be.checked')
    cy.get('form div div label input.mr-1').eq(2).should('not.be.checked')

    // Female checked; others unchecked
    cy.get('form div div label input.mr-1').eq(1).check().should('be.checked')
    cy.get('form div div label input.mr-1').eq(0).should('not.be.checked')
    cy.get('form div div label input.mr-1').eq(2).should('not.be.checked')
  })


  it('Validating the address input box', () => {
    cy.get('input[placeholder*="address"]').should('be.visible').and('have.attr', 'placeholder',  'Enter your address').and('not.have.attr', 'required')
    cy.get('form > div:nth-child(3) > label').should('have.text', 'Address')
    // cy.get('input[placeholder*="address"]').should('have.attr', 'placeholder',  'Enter your address')
  })
  

  it('Validating the email input box', () => {
    cy.get('input[placeholder*="email"]').should('be.visible').and('have.attr', 'placeholder',  'Enter your email').and('have.attr', 'required')
    cy.get('form > div:nth-child(4) > label').should('have.text', 'Email *')
    // cy.get('input[placeholder*="email"]').should('have.attr', 'placeholder',  'Enter your email')
  })


  it('Validating phone input box', () => {
    cy.get('input[placeholder*="phone"]').should('be.visible').and('have.attr', 'placeholder',  'Enter your phone number').and('not.have.attr', 'required')
    cy.get('form > div:nth-child(5) > label').should('have.text', 'Phone')
    // cy.get('input[placeholder*="phone"]').should('have.attr', 'placeholder',  'Enter your phone number')
  })


  it('Validating the message text area', () => {
    cy.get('.textarea').should('be.visible').and('have.attr', 'placeholder',  'Type your message here...').and('not.have.attr', 'required')
    cy.get('form > div:nth-child(6) > label').should('have.text', 'Message')
    // cy.get('.textarea').should('have.attr', 'placeholder',  'Type your message here...')
  })


  it('Validating consent checkbox', () => {
    cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
    cy.get('input[type*="checkbox"]').check().should('be.checked').uncheck().should('not.be.checked').and('have.attr', 'required')
    // cy.get('input[type*="checkbox"]').should('have.attr', 'required')
    // cy.get('input[type*="checkbox"]').should('be.enabled')
  })


  it('Validating Submit button', () => {
    cy.get('.button.is-link').should('be.visible').and('have.text', 'SUBMIT').and('be.enabled').click()
    // cy.get('.button.is-link').click()
    // cy.get('.button.is-link').should('have.text', 'SUBMIT')
  })


  it('Validating form submission', () => {
    let person = [
      { selector: '[placeholder*="name"]', text: 'John'},
      { selector: 'input[placeholder*="address"]', text: '123 Fake Street'},
      { selector: 'input[placeholder*="email', text: 'johndoe@gmail.com'},
      { selector: 'input[placeholder*="phone"]', text: '212-777-7777'},
      { selector: '.textarea', text: 'Who does not love Cypress, am I right?'}
    ]
    person.forEach(({selector, text}) => {
      cy.get(selector).type(text)
    })
    cy.get('form > div:nth-child(2) > div > label:nth-child(2) > input').check()
    cy.get('input[type*="checkbox"]').check()
    cy.get('.button.is-link').click()
    cy.get('.mt-5').should('be.visible').should('have.text', 'Thanks for submitting!')
    // cy.get('[placeholder*="name"]').type('John')
    // cy.get('input[placeholder*="address"]').type('123 Fake Street')
    // cy.get('input[placeholder*="email"]').type('johndoe@gmail.com')
    // cy.get('input[placeholder*="phone"]').type('212-777-7777')
    // cy.get('.textarea').type('Who does not love Cypress, am I right?')
  })

  
})