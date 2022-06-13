Cypress.Commands.add('buttonCheck', (button) => {
    cy.iframe('#iframe_panel_body > iframe').as('iframe').find('button').click().should('not.be.visible')
})