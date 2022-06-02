"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ViaCep_1 = require("./ViaCep");
let ViaCepAPI = new ViaCep_1.ViaCep();
console.log(ViaCepAPI.getAddress('14095050'));
