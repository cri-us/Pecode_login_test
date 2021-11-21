# Cypress io and Javascript login test cases for company Pecode Software with using page objects

## Table of contents
* [About Project](#about-project)
* [Technologies](#technologies)
* [Setup](#setup)
* [Test scenarios](#scenarios)
* [Page Objects](#page-objects)
* [Contacts](#contacts)

## About Project
This project aimed to test the users login panel in various scenarios.
	
## Technologies
Project is created with:
* Cypress version: 8.6.0
* NodeJS version: 16.4.0
* NPM version: 7.18.1
* Cypress-mochawesome-reporter: 2.3.0
	
## Setup
To run this project;
Install Cypress via npm:

```
cd /your/project/path
npm install

npm init

npm install cypress --save-dev

$(npm bin)/cypress open


``` 
## Scenarios
* 1-Failed Login test(Login in without password)
This scenarios aimed trying to login without entering password
```
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


``` 
* 2-Failed Login test(Login in without username)
This scenarios aimed trying to login without entering username
```
import loginPage from "./page-objects/login_page"

context('Login feature of pecode - Without username', () => { 
    it('Open the login page and verify the url and title', () => {

        loginPage.open() //Open the login page
        cy.wait(300)
        cy.url().should("include","pecodesoftware") //Assert  the url
        cy.title().should("include","Login") //Assert the title

    })
    
    it('Entering password and verify it',() => {
        loginPage.passWord.type('blablabla1998')
        .should("have.value","blablabla1998")
        cy.wait(900)

    })
    
    it('Clicking login button and verify error message ',() =>{

        loginPage.loginBtn.click()
        loginPage.errorBx
        .should("have.text","Please enter username.")
        cy.wait(300)
        


    })
    

    console.error("Enter your username")
        
        

})
``` 
* 3- Passed Login test
This scenarios aimed to login with fulfilled requirements
```
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


``` 



## Page Objects
```
class loginPage{

    get userName() {
        return cy.get(':nth-child(1) > .form-control')
    }

    get loginBtn() {
        return cy.get('.btn')
    }

    get errorBx() {
        return cy.get('.has-error > .help-block')
    }

    get passWord() {
        return cy.get(':nth-child(2) > .form-control')
    }

    open() {
        cy.visit("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php");
    }

}

export default new loginPage();


```
## Contacts
* Ali Unsal Albaz albazaliunsal@gmail.com
* Project link: https://github.com/cri-us/Pecode_login_test

