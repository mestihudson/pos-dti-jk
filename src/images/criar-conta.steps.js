Given("eu sou um visitante", async () => {
  expect(await db.usuarioPresente(usuario.email)).to.be.false
})

When("eu me registro", async () => {
  await ui.abrir()
  await ui.preencherRegistro(usuario.email, usuario.senha)
  await ui.registrar()
})

Then("eu sou um usuário", async () => {
  expect(
    await ui.mensagemPresente(`Usuário ${usuario.email} registrado com sucesso`)
  ).to.be.true
  expect(await db.usuarioPresente(usuario.email)).to.be.true
})

