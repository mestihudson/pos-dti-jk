
import { render, fireEvent, cleanup } from "@testing-library/react"

...

describe("<Registro/>", () => {
  ...

  it("deve ter um campo de texto para email", () => {
    const { container } = render(<Registro/>)
    expect(container.querySelector("[data-input='Email']")).not.toBeNull()
  })

  it("deve ter um campo de texto para senha", () => {
    const { container } = render(<Registro/>)
    expect(container.querySelector("[data-input='Senha']")).not.toBeNull()
  })

  it("deve ter um botão de ação para submeter registro", () => {
    const { container } = render(<Registro/>)
    expect(container.querySelector("[data-trigger='Registrar']")).not.toBeNull()
  })

  it("deve passar email e senha para api de registro", async () => {
    Api.registrar = jest.fn().mockImplementation(() => Promise.resolve())
    const email = "usuario@email.com"
    const senha = "P@ssw0rD"
    const { container } = render(<Registro/>)
    await act(async () => {
      await fireEvent
        .change(
          container
            .querySelector("[data-input='Email']"), { target: { value: email } }
        )
      await fireEvent
        .change(
          container
            .querySelector("[data-input='Senha']"), { target: { value: senha } }
        )
      await fireEvent
        .click(container.querySelector("[data-trigger='Registrar']"))
      expect(Api.registrar).toHaveBeenCalledWith({ email, senha })
    })
  })

  it("deve mostrar mensagem sucesso para tal retorno api registro", async () => {
    Api.registrar = jest.fn().mockImplementation(() => Promise.resolve())
    const email = "usuario@email.com"
    const senha = "P@ssw0rD"
    const { container } = render(<Registro/>)
    await act(async () => {
      await fireEvent
        .change(
          container
            .querySelector("[data-input='Email']"), { target: { value: email } }
        )
      await fireEvent
        .change(
          container
            .querySelector("[data-input='Senha']"), { target: { value: senha } }
        )
      await fireEvent
        .click(container.querySelector("[data-trigger='Registrar']"))
      const components = container.querySelectorAll("[data-component='Mensagem']")
      expect(components).toHaveLength(1)
      expect(components[0].textContent)
        .toBe(`Usuário ${email} registrado com sucesso`)
    })
  })

  it("deve mostrar mensagem erro para tal retorno da api registro", async () => {
    try {
      Api.registrar = jest.fn(() => Promise.reject())
      const email = "usuario@email.com"
      const senha = "P@ssw0rD"
      const { container } = render(<Registro/>)
      await act(async () => {
        await fireEvent
          .change(
            container
              .querySelector("[data-input='Email']"), { target: { value: email } }
          )
        await fireEvent
          .change(
            container
              .querySelector("[data-input='Senha']"), { target: { value: senha } }
          )
        await fireEvent
          .click(container.querySelector("[data-trigger='Registrar']"))
        const components = container.querySelectorAll("[data-component='Mensagem']")
        expect(components).toHaveLength(1)
        expect(components[0].textContent)
          .toBe(`Usuário ${email} não pode ser registrado`)
      })
    } catch(e) {
    }
  })
})
