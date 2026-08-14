const { By } = require('selenium-webdriver');
const { esperarVisible } = require('../utils/waits');

class LoginPage {
    constructor(driver) {
        this.driver = driver;

        // Selectores tomados directamente de login.jsx
        this.inputCorreo = By.id('correo');
        this.inputClave = By.id('contrasena');
        this.botonIngresar = By.css('button[type="submit"]');
        this.mensajeError = By.css('.alerta.error');
    }

    async login(correo, clave) {
        const campoCorreo = await esperarVisible(this.driver, this.inputCorreo);
        await campoCorreo.clear();
        await campoCorreo.sendKeys(correo);

        const campoClave = await esperarVisible(this.driver, this.inputClave);
        await campoClave.clear();
        await campoClave.sendKeys(clave);

        const boton = await esperarVisible(this.driver, this.botonIngresar);
        await boton.click();
    }

    async obtenerMensajeError() {
        const elemento = await esperarVisible(this.driver, this.mensajeError);
        return await elemento.getText();
    }
}

module.exports = LoginPage;