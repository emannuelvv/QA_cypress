/// <reference types="Cypress"/>

describe('Teste funcional de login', () => {
    it('deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('contain','Products')
    });
    it('Validando login incorreta', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_jhony")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','not match')
    });
    it('Validando senha incorreta', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_secreto")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','not match')
    });
});