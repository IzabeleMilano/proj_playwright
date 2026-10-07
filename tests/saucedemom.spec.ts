
import { test, expect } from '@playwright/test';

test ('Localizando por data-test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByRole('button', {name: 'login-button'}).click();
    await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs');

})
