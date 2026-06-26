class HomePage
{

    getAcceptCookies()
    {
        return cy.get('.acceptCookie')
    }

    getServicesTab()
    {
        return cy.get('div[data-levelname="level2"]')
    }
    getSeletedItem()
    {
        return cy.get(".selected")
    }
    getNavBarCountrySelection()
    {
        return cy.get(".navbar-global")
    }
    getCountriesList()
    {
        return cy.get("#country-list-id a")
    }

}

export default HomePage