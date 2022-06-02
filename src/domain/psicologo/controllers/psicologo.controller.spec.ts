import app from '../../..';
import supertest from "supertest";

describe('No controller ao executar a funcao', () => {

  describe('create', () => {

    test("em caso de sucesso, deve retornar 201", async () => {
      const response = await supertest(app)
        .post('/psicologos')
        .send({
          nome: "466a3re42ee3ere4lo1",
          email: "466alore44eeere543231@gmail.com",
          senha: "1234",
          apresentacao: "bla bla bla bla",
          cep: "14095050"
        });

      expect(response.status).toBe(201)
    })
  })


});