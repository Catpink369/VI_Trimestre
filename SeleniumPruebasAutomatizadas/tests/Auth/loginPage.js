const { expect } = require('chai');
const http = require('http');
const { crearDriver } = require('../../drivers/driverFactory');
const { esperarUrlContiene } = require('../../utils/waits');
const LoginPage = require('../../pages/LoginPage');
const ClientePage = require('../../pages/ClientePage');
const config = require('../../config/environments');

function bdActiva(baseURL) {
    return new Promise((resolve) => {
        const req = http.get(baseURL, (res) => {
            res.resume();
            resolve(true);
        });
        req.on('error', () => resolve(false));
        req.setTimeout(2000, () => {
            req.destroy();
            resolve(false);
        });
    });
}

describe('Iniciar sesión', function () {
    this.timeout(20000);
    let driver;
    let loginPage;

    before(async function () {
        const bd = await bdActiva(config.baseUrl);
        if (!bd) {
            throw new Error(
                `No se pudo conectar a ${config.baseUrl}. ¿Está corriendo el front?`
            );
        }
        driver = await crearDriver('chrome', true);
    });

    beforeEach(async () => {
        loginPage = new LoginPage(driver);
        await driver.get(`${config.baseUrl}/login`);
    });

    after(async () => {
        if (driver) await driver.quit();
    });

    it('debería mostrar error con credenciales inválidas', async () => {
        await loginPage.login('correo_falso@gmail.com', 'ClaveIncorrecta');

        const mensaje = await loginPage.obtenerMensajeError();
        expect(mensaje.trim().length).to.be.greaterThan(0);

        const url = await driver.getCurrentUrl();
        expect(url).to.include('/login');
    });

    it('debería acceder a /cliente con credenciales válidas', async () => {
        await loginPage.login('cliente@gmail.com', '123456');
        await esperarUrlContiene(driver, '/cliente');

        const clientePage = new ClientePage(driver);
        await clientePage.cerrarVentanaOfertas();
        const titulo = await clientePage.obtenerTitulo();
        expect(titulo).to.include('Gurama');
    });
});