import { test, expect } from "@playwright/test";

/**
 * Este test verifica que el fondo global se mantenga visible
 * al navegar por las principales rutas de la web.
 */

const routesToCheck = [
  "/",            // Página de inicio
  "/contacto",    // Página de contacto
  "/funcionalidades", // Página de funcionalidades
  // Agregá más rutas que quieras validar
];

test.describe("Fondo global visible", () => {
  for (const route of routesToCheck) {
    test(`El fondo se mantiene visible en ${route}`, async ({ page }) => {
      await page.goto(`http://localhost:3000${route}`);

      // Esperar que el fondo global esté presente en el DOM
      const backgroundImage = page.locator("img[alt='Fondo global']");
      await expect(backgroundImage).toBeVisible();

      // Comprobar que no hay wrappers con fondos sólidos que tapen el fondo global
      const badBackgrounds = await page.locator(
        "*:is([class*='bg-black'], [class*='bg-gray-900'], [class*='bg-background'], [class*='bg-card'])"
      ).count();

      expect(badBackgrounds).toBe(0);
    });
  }
});
