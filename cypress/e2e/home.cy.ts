/// <reference types="cypress" />

describe("Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("has correct links", () => {
    cy.contains("Hue");
  });
});

export {};
