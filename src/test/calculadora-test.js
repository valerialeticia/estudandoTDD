const chai = require('chai')
const calculadora = require('../demo-1/calculadora')

const assert = chai.assert

describe('calculadora', () => {
    it('deveria somar', () => {
        assert.equal(calculadora.somar(2,2), 4)
    })

    it('deveria subtrair', () => {
        assert.equal(calculadora.subtrair(10,2), 8)
    })

    it('deveria multiplicar', () => {
        assert.equal(calculadora.multiplicar(2,2), 4)
    })

    it('deveria dividir', () => {
        assert.equal(calculadora.dividir(10, 5), 2)
    })

})