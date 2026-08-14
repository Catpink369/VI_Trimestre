//npx playwright test -- headed -> iniciar carpeta test completa
//npx playwright test tests/ ... nobrearchivo -- headed

import { test, expect } from '@playwright/test';
// se le da un nombre al test
// asyn para ejecutar de manera asincrona, await espera hasta que el bloque se ejecute pase a la siguiente
test('LLenar formulario', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); 
    await expect(page).toHaveTitle('Swag Labs');

    await page.getByPlaceholder('username').click();
    await page.getByPlaceholder('username').fill('standard_user'); 

    await page.getByPlaceholder('password').click();
    await page.getByPlaceholder('password').fill('secret_sauce'); 

    await page.getByRole('button', { name: 'Login' }).click(); 

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});

