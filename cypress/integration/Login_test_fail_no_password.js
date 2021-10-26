import loginPage from "./page-objects/login_page"

context('Login feature of pecode - Without Password', () => { 
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
    
 
    it('Clicking login button and verify error message ',() =>{

        loginPage.loginBtn.click()
        loginPage.errorBx
        .should("have.text","Please enter your password.")
        cy.wait(300)
        


    })
    

    console.error("You have to enter your password")
        
        

})