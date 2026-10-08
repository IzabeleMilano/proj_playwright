import { Page } from '@playwright/test';


 export class LoginPage {
  constructor (private page:Page) {
}
  public async acessaPagina(url :string) {
  await this.page.goto(url);
}
  public async preencheLogin(login :string) {
    await this.page.locator('#input-login').fill(login);
}
  public async preencheSenha(senha :string){
    await this.page.locator('#input-senha').fill(senha);
}
  public async clicarBotao() {
    await this.page.locator('#button-entrar').click();
}
 }

