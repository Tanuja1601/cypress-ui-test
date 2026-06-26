class AutomationPage

{

    getPageHeading()
    {
        return cy.get(".page-heading")
    
    }
    getFirstName()
    {
        return cy.get('input[id="4ff2ed4d-4861-4914-86eb-87dfa65876d8"]')
    }
    getLastName()
    {
        return cy.get('input[id="11ce8b49-5298-491a-aebe-d0900d6f49a7"]')
    }
    getEmail()
    {
        return cy.get('input[id="056d8435-4d06-44f3-896a-d7b0bf4d37b2"]')
    }
    getPhone()
    {
        return cy.get('input[id="755aa064-7be2-432b-b8a2-805b5f4f9384"]')
    }
    getMessage()
    {
        return cy.get('textarea[id="88459d00-b812-459a-99e4-5dc6eff2aa19"]')
    }
    getIagreeCheckbox()
    {
        return cy.get("[value='I agree']")
    }

    getSubmittButton()
    {
        return cy.get('#b35711ee-b569-48b4-8ec4-6476dbf61ef8')
    }

}

export default AutomationPage
