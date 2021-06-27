
package hive;

...

@Path("/usuarios")
public class Main {
  @Inject private final AgroalDataSource ds;

  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  public Response criarConta(final Usuario usuario) throws Throwable {
    try {
      new InternetAddress(usuario.email).validate();
    } catch (AddressException ae) {
      return Response.status(400).build();
    }
    if (usuario.senha.trim().length() < 8 || usuario.senha.trim().length() > 20) {
      return Response.status(400).build();
    }
    final ResultSet rs = ds.getConnection().createStatement()
      .executeQuery(String.format("select count(id) as quant from usuarios where email = '%s'", usuario.email));
    if (rs.next() && rs.getString("quant").equals("1")) {
      return Response.status(400).build();
    }
    ds.getConnection().createStatement()
      .executeUpdate(String.format("insert into usuarios values (nextval('usuarios_id_seq'), '%s', '%s')", usuario.email, usuario.senha));
    return Response.status(201).build();
  }

  ...
}
