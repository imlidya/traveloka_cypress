/// <reference types="cypress" />

describe('Flights Form', () => {
    beforeEach(() => {
        cy.visit("https://m.traveloka.com/en-id/flight")
    })

    it('Succesfully Search Flight', () => {
        cy.get('.r-1ifxtd0 > [style="padding-top:28px"] > .r-1awozwy > .css-11aywtz').click()
        cy.get('.r-105ug2t > .r-bnwqim > :nth-child(1) > .r-2ndt7b > .r-16y2uox > .r-1awozwy > .css-11aywtz').type("Jakarta")
        cy.get('[data-testid="autocompleteSectionList-origin"] > :nth-child(1) > :nth-child(2) > .r-1habvwh').click()
        cy.get(':nth-child(2) > [style="padding-top:28px"] > .r-1awozwy > .css-11aywtz').click()
        cy.get('.r-105ug2t > .r-bnwqim > :nth-child(1) > .r-2ndt7b > .r-16y2uox > .r-1awozwy > .css-11aywtz').type("Padang")
        cy.get('[data-testid="autocompleteSectionList-destination"] > :nth-child(1) > :nth-child(3) > .r-1habvwh').click()
        cy.get('[data-testid="mFSFPassenger"]').click()
        cy.get('[data-testid="mFSFPaxAdults-add"] > img').click()
        cy.get('[data-testid="mFSFPaxChildren-add"] > img').click()
        cy.get('[data-testid="mFSFPaxInfants-add"] > img').click()
        cy.get('[style="background-color: rgb(1, 148, 243);"]').click()
        cy.contains(4)
        cy.get('[data-testid="mFSFSeatClass"]')
        cy.get('[data-testid="mFSFSearchButton"]').click()
    })

    it('Check Round Icon', () => {
        cy.get('.css-901oao > img').click()
    })

    it('Check Round Trip', () => {
        cy.get('.r-1ei5mc7').click()
        cy.contains('Return Date')
        cy.get('[data-testid="mFSFReturnDate"]').click()
    })
})