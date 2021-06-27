
...

class DB {
  constructor () {
    this.pool = new Pool({
      host: "db",
      database: "postgres",
      port: 5432,
      user: "postgres",
      password: "postgres12345678"
    })
  }

  async abrir() {
    this.client = await this.pool.connect()
  }

  async usuarioPresente(email, senha) {
    if (!this.client) {
      await this.abrir()
    }
    const result = await this.client.query(`
      select count(id)
      from usuarios where email = '${email}' and senha = '${senha}'
    `)
    return result.rows[0].count === "1"
  }

  ...
}
