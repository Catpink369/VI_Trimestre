import { test as setup, expect } from '@playwright/test';
const authFile = 'playwright/.auth/user.json';

setup('autentificarse como cliente', async ({ page }) => {
    await page.goto('/login');
    await page.getByPlaceholder('Ingrese su correo').fill('catpink369@gmail.com');
    await page.getByPlaceholder('Ingrese su contraseña').fill('123456');
    await page.getByRole('button', { name: 'Ingresar' }).click();
    await expect(page).toHaveURL(/\/cliente/);
    await page.locator('.ventana .cerrar').click();
    await page.context().storageState({ path: authFile });
});
