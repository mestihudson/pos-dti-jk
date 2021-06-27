Funcionalidade: Criar conta

  Como um visitante
  Eu quero criar uma conta de usuário
  Para entrar e jogar uma partida

  Cenário: Deve criar conta
    Dado que eu sou um visitante
    Quando eu tento me registrar
    Então eu consigo criar uma conta de usuário

  Esquema do Cenário: Deve falhar para email inválido
    Dado que eu sou um visitante
    Quando eu tento me registrar com um email inválido: <email inválido>
    Então eu não consigo criar uma conta de usuário

    Exemplos:
      | email inválido |
      | '1'            |
      | 'a'            |
      | 'abc'          |
      | 'abc@'         |

  Esquema do Cenário: Deve falhar para senha inválida
    Dado que eu sou um visitante
    Quando eu tento me registrar com uma senha inválida: <senha inválida>
    Então eu não consigo criar uma conta de usuário

    Exemplos: Contendo espaços nas extremidades
      | senha inválida |
      | '    1   '     |
      | '12      '     |
      | '     123'     |

    Exemplos: Tamanho menor que 8 (oito)
      | senha inválida |
      | '1'            |
      | '12'           |
      | '1234'         |
      | '12345'        |
      | '123456'       |
      | '123457'       |

    Exemplos: Tamanho maior que 20 (vinte)
      | senha inválida           |
      | '123456789012345678901'  |
      | '1234567890123456789012' |

  Cenário: Deve falhar para email já vinculado
    Dado que eu sou um visitante
    Quando eu tento me registrar com um email já vinculado
    Então eu não consigo criar uma conta de usuário
