Cypress.Commands.add('backgroundLogin', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
            user: {
                email: 'kiko@pirulito.com',
                password: '12345678'
            }
        }
        }).then((loginResponse) => {
            console.log(loginResponse.body)
            cy.log(loginResponse.body.user.token)

            cy.visit('editor', {
                onBeforeLoad: (win) => {
                    win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
                }
            });
        })
})
