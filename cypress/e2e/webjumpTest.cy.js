describe('empty spec', () => {

  beforeEach(() => {
    cy.visit('https://wj-qa-automation-test.github.io/qa-test/');

   })
  it('1) cenário ', () => {
    cy.get('#btn_one').click().should('not.be.visible');
    cy.get('#btn_two').click().should('not.be.visible');
    cy.get('#btn_link').click().should('not.be.visible');
  })
  it('2) cenário ', () => {
    cy.iframe('#iframe_panel_body > iframe').as('iframe').find('#btn_one').click().should('not.be.visible');
    cy.iframe('#iframe_panel_body > iframe').as('iframe').find('#btn_two').click().should('not.be.visible');
    cy.iframe('#iframe_panel_body > iframe').as('iframe').find('#btn_link').click().should('not.be.visible');
  })

  it('3) cenário ', () => {
    cy.get('#first_name').type('bom dia'); 
    cy.get('#btn_one').click();
    cy.iframe('#iframe_panel_body > iframe').as('iframe').find('#opt_three').check();
    cy.get('[alt="selenium"]').should( 'have.attr','src', 'https://i.imgur.com/1vsaEJB.jpg');
  })

})