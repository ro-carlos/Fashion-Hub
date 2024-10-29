// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("verifyNoConsoleErrors", () => {
  let consoleErrorCalled = false;

  // Intercept console.error calls before the window loads
  cy.on("window:before:load", (win) => {
    cy.stub(win.console, "error").callsFake(() => {
      consoleErrorCalled = true; // Set the flag to true if console.error is called
    });
  });

  cy.wrap().should(() => {
    expect(consoleErrorCalled).to.be.false;
  });
});

Cypress.Commands.add("checkUrlStatus", (url) => {
  cy.request({
    url: url,
    failOnStatusCode: false, // Prevent failure on non-2xx or 3xx status codes
  }).then((response) => {
    expect(response.status).to.be.oneOf([200, 301, 302, 303, 307, 308]);
    expect(response.status).not.to.be.within(400, 499);
  });
});
