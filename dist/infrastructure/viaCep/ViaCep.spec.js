"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViaCep_1 = require("./ViaCep");
describe('Via Cep', () => {
    const viaCep = new ViaCep_1.ViaCep();
    const genericCep = '14095050';
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
        });
        test("must return the full address", () => __awaiter(void 0, void 0, void 0, function* () {
            expect(yield viaCep.getAddress(genericCep)).toEqual(expectedResponse);
        }));
    });
});
