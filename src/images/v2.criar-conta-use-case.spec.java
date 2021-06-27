
package unit.hive.registro.application;

...

class CriarContaServiceSpec {
  ...

  @Test void deveFalharParaEmailInvalido() {
    doThrow(new EmailInvalidoException()).when(emailValidator).validar(any(String.class));
    assertThatExceptionOfType(EmailInvalidoException.class).isThrownBy(() -> { service.criarConta(command); }).withMessage("Email inválido");
  }

  @Test void deveFalharParaSenhaInvalida() {
    doThrow(new SenhaInvalidaException()).when(senhaValidator).validar(any(String.class));
    assertThatExceptionOfType(SenhaInvalidaException.class).isThrownBy(() -> { service.criarConta(command); }).withMessage("Senha inválida");
  }

  @Test void deveFalharParaEmailJaVinculado() {
    doThrow(new EmailVinculadoException()).when(emailVinculadoValidator).validar(any(String.class));
    assertThatExceptionOfType(EmailVinculadoException.class).isThrownBy(() -> { service.criarConta(command); }).withMessage("Email já vinculado");
  }

  @Test void deveCriarConta() {
    service.criarConta(command);
    verify(criarContaPort, times(1)).criarConta(any());
  }
}
