import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login com sucesso', () => {
  test.only('Validar Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.acessaPagina('https://desenv.solus.inf.br/qld/web_beneficiario/auth/login');
    await loginPage.preencheLogin('034.919.880-20');
    await loginPage.preencheSenha('123456');
    await loginPage.clicarBotao();
    await expect(page.locator('.Toastify__toast-body')).toHaveText('Senha inválida!');
  })
})