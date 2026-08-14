const { By } = require('selenium-webdriver');
const { esperarVisible } = require('../utils/waits');

class ClientePage {
    constructor(driver) {
        this.driver = driver;
        this.tituloHero = By.css('.titulo_principal h1'); // "Gurama"
        this.botonCerrarVentana = By.css('.ventana .cerrar');
    }

    async cerrarVentanaOfertas() {
        try {
            const boton = await esperarVisible(this.driver, this.botonCerrarVentana, 5000);
            await boton.click();
        } catch (_) {
            // si no aparece a tiempo, no es un fallo del login en sí
        }
    }

    async obtenerTitulo() {
        const elemento = await esperarVisible(this.driver, this.tituloHero);
        return await elemento.getText();
    }
}

module.exports = ClientePage;