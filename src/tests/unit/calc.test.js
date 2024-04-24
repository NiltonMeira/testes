const { Soma, Subtracao, Multiplicacao, Divisao, Primos, validate_cpf} = require("../../commom/calc")

describe('Calculadora', () => {
    it('deve retornar o resultado da soma de 1+2', () => {
        const res = Soma(1, 2);
        expect(res).toBe(3);
    }),

    it('Deve retornar o resultado da subtração de 1-2', () => {
        const res = Subtracao(1, 2);
        expect(res).toBe(-1);
    }),

    it('Deve retornar o resultado da multiplicacao de 1*2', () => {
        const res = Multiplicacao(1, 2);
        expect(res).toBe(2);
    }),

    it('Deve retornar o resultado da subtração de 2/1', () => {
        const res = Divisao(2, 1);
        expect(res).toBe(2);
    })

})

describe ('Primos', () => {
    it('Deve retornar se o número 2 é primo', () => {
    const res = Primos(5);
    expect(res).toBe(true);
    })
})

describe ('Cpf', () => {
    it('Deve retornar se o cpf é valido', () => {
    const res = validate_cpf('07564684933');
    expect(res).toBe(true);
    })
})

