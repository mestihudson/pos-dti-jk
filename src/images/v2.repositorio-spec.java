
package integration.hive.registro.adapters.out.persistence;

...

@QuarkusTest class UsuariosJdbcRepositorySpec {
  ...

  @Test void deveDispararExcecaoQuandoEmailJaVinculado() throws Throwable {
    cleandb();
    insertUsuario();
    assertThatExceptionOfType(EmailVinculadoException.class).isThrownBy(() -> { repository.validar(EMAIL); });
  }

  @Test void deveInserirUmRegistroNaTabelaUsuarios() throws Throwable {
    cleandb();
    changes = new Changes(ds);
    changes.setStartPointNow();
    final UsuariosJdbcRepository repository = new UsuariosJdbcRepository(ds);
    repository.criarConta(Usuario.builder().email(EMAIL).senha(SENHA).build());
    changes.setEndPointNow();
    assertThat(changes)
      .change()
        .rowAtStartPoint().doesNotExist()
        .rowAtEndPoint().exists().hasValues(ID, EMAIL, SENHA);
  }

  ...
}
