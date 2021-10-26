import loginPage from "./page-objects/login_page"

context('Login feature of pecode - Unsuccessful login', () => { 
    it('Open the login page and verify the url and title', () => {

        loginPage.open() //Open the login page
        cy.wait(300)
        cy.url().should("include","pecodesoftware") //Assert  the url
        cy.title().should("include","Login") //Assert the title

    })
    it('Entering Username and asserts the url it',() => {
        loginPage.userName
        .type('fake@mail.com')
        .should("have.value","fake@mail.com")
        cy.wait(300)


    })
    
    it('Entering password and verify it',() => {
        loginPage.passWord.type('blablabla1998')
        .should("have.value","blablabla1998")
        cy.wait(900)

    })
    
    it('Clicking login button and verify error message ',() =>{

        loginPage.loginBtn.click()
        loginPage.errorBx
        .should("have.text","No account found with that username.")
        cy.wait(300)
        


    })
    

    console.error("There is no account")
        
        

})