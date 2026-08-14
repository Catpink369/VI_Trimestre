import { test, expect } from '@playwright/test';

test('Agregar al carrito desde el detalle del producto', async ({ page }) => {
    await page.goto('/catalogo_c');
    const primeraTarjeta = page.locator('.contenedor-productos > div').first();
    const nombreEsperado = await primeraTarjeta.locator('p strong').innerText();
    
    await primeraTarjeta.getByRole('link').click();
    await expect(page).toHaveURL(/\/producto\/\d+/);

    await expect(page.locator('#producto-nombre')).toHaveText(nombreEsperado);
    await expect(page.locator('#producto-imagen')).toBeVisible();

    await page.getByRole('button', { name: 'Agregar al carrito' }).click();
    await page.goto('/carrito');
    await expect(page.getByText(nombreEsperado)).toBeVisible();
});
