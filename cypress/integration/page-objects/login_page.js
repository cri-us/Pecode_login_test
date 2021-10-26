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