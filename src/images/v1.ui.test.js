
...

class UI {
  async preencherRegistro (email, senha) {
    const inputEmail = await this.driver.findElement(By.xpath("//*[@data-input='Email']"))
    await inputEmail.sendKeys(email)
    const inputSenha = await this.driver.findElement(By.xpath("//*[@data-input='Senha']"))
    await inputSenha.sendKeys(senha)
  }

  async registrar () {
    const trigger = await this.driver.findElement(By.xpath("//*[@data-trigger='Registrar']"))
    await trigger.click()
  }

  async mensagemPresente (mensagem) {
    const components = await this.driver.findElements(By.xpath("//*[@data-component='Mensagem']"))
    let result = components.length === 1
    for(let component of components) {
      result = await component.getText() === mensagem
    }
    return result
  }

  ...
}
