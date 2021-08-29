import { UndefinedValidador } from "../../../validadores/shared/undefined-validador"

describe('UndefinedValidador', () => {

  test('deve retorna false caso seja undefined', () => {
    expect(new UndefinedValidador().valido(undefined)).toBeFalsy()
  })

  test('deve retorna true caso não seja undefined', () => {
    expect(new UndefinedValidador().valido('')).toBeTruthy()
  })
})