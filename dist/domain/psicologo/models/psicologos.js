"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Psicologos = void 0;
const db = require("../../../infrastructure/database");
const sequelize_1 = require("sequelize");
exports.Psicologos = db.define("Psicologos", {
    id_psicologo: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING(300),
    },
    apresentacao: {
        type: sequelize_1.DataTypes.STRING,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    bairro: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    tableName: "psicologos",
});
