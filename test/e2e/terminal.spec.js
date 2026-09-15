import { test, expect } from '@playwright/test';

test('smoke: muestra la terminal y su estado seguro', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Hacker Web Simulation/);
  await expect(page.getByRole('heading', { name: /Terminal de simulación/i })).toBeVisible();
  await expect(page.getByText('LOCAL / SEGURO')).toBeVisible();
  await expect(page.getByText('DESCONECTADA')).toBeVisible();
  await expect(page.getByRole('status')).toContainText('ACTIVA');
});

test('pausa y reanuda la simulación', async ({ page }) => {
  await page.goto('/');
  const toggle = page.locator('#toggle');
  await expect(toggle).toHaveAccessibleName('Pausar');
  await toggle.click();
  await expect(toggle).toHaveText('Reanudar');
  await expect(toggle).toHaveAccessibleName('Reanudar');
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('status')).toContainText('PAUSADA');
  await toggle.click();
  await expect(toggle).toHaveText('Pausar');
  await expect(page.getByRole('status')).toContainText('ACTIVA');
});

test('reinicia el registro y el contador', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('log').locator('p')).toHaveCount(1, { timeout: 2500 });
  await page.getByRole('button', { name: 'Pausar' }).click();
  await page.getByRole('button', { name: 'Reiniciar' }).click();
  await expect(page.getByRole('log').locator('p')).toHaveCount(0);
  await expect(page.locator('#balance')).toHaveText('0.00000 BTC ficticios');
  await expect(page.getByRole('status')).toContainText('PAUSADA');
});

test('respeta la preferencia de movimiento reducido', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:3000');
  await expect(page.getByRole('button', { name: 'Reanudar' })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#matrix')).toBeHidden();
  await context.close();
});
