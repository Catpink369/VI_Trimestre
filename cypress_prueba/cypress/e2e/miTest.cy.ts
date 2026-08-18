describe('Login Test', () => {
    
    it('debe redirigir al dashboard', () => {

        // 1. Navega a la página de login
        cy.visit('https://app.com/login')

        // 2. Completa el campo email
        cy.get('input[name="email"]')
        .type('test@example.com')

        // 3. Completa la contraseña
        cy.get('input[name="password"]')
        .type('miPassword123')

        // 4. Envía el formulario
        cy.get('button[type="submit"]')
        .click()

        // 5. Verifica redirección exitosa
        cy.url()
        .should('include', '/dashboard')

    })
})