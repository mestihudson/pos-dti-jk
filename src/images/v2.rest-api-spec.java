
package integration.hive.registro.adapters.in.web;

...

@QuarkusTest class CriarContaResourceSpec {
  @Test void deveRetornarCodigoHttp201QuandoBemSucedido() {
    given()
      .contentType("application/json; charset=utf-8")
      .body(params(param("email", "usuario@email.com"), param("senha", "P@ssw0rD")))
    .when().post("/api/criar-conta")
    .then().statusCode(201);
  }

  @Test void deveRetornarCodigoHttp400QuandoDaOcorrenciaDeExcecaoDeDominio() {
    given()
      .contentType("application/json; charset=utf-8")
      .body(params())
    .when()
      .post("/api/criar-conta")
    .then()
      .statusCode(400)
      .body(notNullValue());
  }

  ...
}
