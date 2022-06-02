import { ViaCep } from './ViaCep';

describe('Via Cep', () => {

    const viaCep = new ViaCep();
    const genericCep= '14095050';
    const expectedResponse = {
        "cep": "14095-050",
        "logradouro": "Rua Benedicta Rodrigues Domingos",
        "complemento": "",
        "bairro": "Parque Industrial Lagoinha",
        "localidade": "Ribeirão Preto",
        "uf": "SP",
        "ibge": "3543402",
        "gia": "5824",
        "ddd": "16",
        "siafi": "6969"
        };

    describe('have method getAddress()', () => {

        test('must be the type function', () => {
            expect(typeof viaCep.getAddress).toBe('function');
        })

        test("must return the full address", async () => {
            expect(await viaCep.getAddress(genericCep)).toEqual(expectedResponse);    
        });

    })
})