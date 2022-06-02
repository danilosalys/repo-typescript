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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsicologoService = void 0;
const psicologos_1 = require("../models/psicologos");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const viaCep_1 = require("../../../infrastructure/viaCep");
class PsicologoService {
    registerPsicologo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { senha, cep } = data;
            const newSenha = bcryptjs_1.default.hashSync(senha, 10);
            const newPsicologo = yield psicologos_1.Psicologos.create(Object.assign(Object.assign({}, data), { senha: newSenha, bairro: yield this.getBairro(cep) }));
            return newPsicologo;
        });
    }
    getBairro(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullAddress = yield viaCep_1.viaCepApi.getAddress(cep);
            return fullAddress.bairro;
        });
    }
}
exports.PsicologoService = PsicologoService;
