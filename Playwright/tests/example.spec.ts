/*import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//page.getByRole() -> Busca los elementos por lo que son o lo que hacen para un usuario (un botón, un enlace, un encabezado, etc.). -> page.getByRole('button', { name: 'Guardar' })

//page.getByText() -> Por lo que dice en pantalla -> page.getByText('Bienvenido a mi sitio web')

//page.getByLabel() -> Busca un campo de texto o un control a través del texto que lo acompaña para indicarte qué escribir.
//Si en la pantalla ves el texto "Correo electrónico" justo al lado o arriba de una casilla, le dices: "Busca el campo que está junto a la palabra 'Correo electrónico'".
//page.getByLabel('Correo electrónico')

//page.getByPlaceholder() -> Busca el cuadro de texto que dice 'Ej: Juan Pérez' por dentro. -> page.getByPlaceholder('Ej: Juan Pérez')

//page.getByAltText() -> Busca elementos (casi siempre imágenes) mediante la descripción oculta (alt) que tienen para personas con discapacidad visual. -> page.getByAltText('Logo de la empresa')

//page.getByTitle() -> Busca un elemento usando el texto que aparece en un pequeño cartel flotante cuando dejas el cursor del mouse encima de él (el atributo title). -> page.getByTitle('Cerrar sesión')

//page.getByTestId() -> Busca un elemento por una marca especial que los programadores le ponen en el código (data-testid="mi-elemento") para que sea fácil de encontrar. -> page.getByTestId('submit-button')
*/