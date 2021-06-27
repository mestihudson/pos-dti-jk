import { useState } from "react"

import axios from "axios"

function Raiz() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mostrarMensagem, setMostrarMensagem] = useState(false)
  const [mensagem, setMensagem] = useState("")

  const registrarClick = () => {
    axios.post("/api/usuarios", { email, senha })
      .then(() => {
        setMensagem(`Usuário ${email} registrado com sucesso`)
        setMostrarMensagem(true)
      })
  }
  const emailChange = ({ target: { value } }) => setEmail(value)
  const senhaChange = ({ target: { value } }) => setSenha(value)

  return (<>
    <input type="text" data-input="Email"value={email} onChange={emailChange}/>
    <input type="password" data-input="Senha" value={senha} onChange={senhaChange}/>
    <button data-trigger="Registrar" onClick={registrarClick}>Registrar</button>
    { mostrarMensagem && <span data-component="Mensagem">{ mensagem }</span>}
  </>)
}

export default Raiz

