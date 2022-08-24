///  <reference types = 'cypress' />


describe('API Tests', () => {
    it('GET', () => {
        cy.request({

            method: 'GET',
            url: '/posts'
        }).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })

    })


    it('POST', () => {

        //create unique email address
        let randomNumber = Math.random() * 100
        let attachment = randomNumber.toString()
        let emailName = 'john'
        let email = emailName.concat(attachment, '@test.com')

        cy.request({
            method: 'POST',
            url: '/users',
            body: {
                'name': 'Ken Pan',
                "email": email,
                "gender": "male",
                "status": "active"
            },
            headers: {
                "Authorization": "Bearer 185b6d08e388cb925904b7130a062eb4972204b0c00006149b46a8667cbc3bbb",
                "Content-Type": "application/json"
            }
        })
            .its('body')
            .should('include', { email: email })
            .then((response) => {
                expect(response.body).to.not.be.null
            })

    })


    it('DELETE', () => {



        cy.request({
            method: 'DELETE',
            url: '/users/2486', // This id has to be unique.
            headers: {
                "Authorization": "Bearer 185b6d08e388cb925904b7130a062eb4972204b0c00006149b46a8667cbc3bbb",
                "Content-Type": "application/json"
            }
        }).its('status').should('eq', 204)

    })



})