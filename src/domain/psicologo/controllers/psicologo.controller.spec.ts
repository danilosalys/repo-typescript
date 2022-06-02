import app from '../../..';
import supertest from "supertest";
import { hasUncaughtExceptionCaptureCallback } from 'process';

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

    test("em caso de sucesso, deve retornar o response do request", async () => {
      const response = await supertest(app)
        .post('/psicologos')
        .send({
          nome: "abc3",
          email: "abc2@gmail.com",
          senha: "1234",
          apresentacao: "bla bla bla bla",
          cep: "14095050"
        });

        expect(response.body).toEqual(
          expect.objectContaining({
              createdAt: expect.any(String),
              id: expect.any(Number),
              nome: expect.any(String),
              email: expect.any(String),
              senha: expect.any(String),
              apresentacao: expect.any(String),
              bairro: expect.any(String),
              updatedAt: expect.any(String),
          })
      ) 

      expect(JSON.parse(response.text)).toMatchObject(
          {
              nome: "alo",
              email: "nataliaAlo7@gmail.com", 
          })

      expect(response.body).toMatchObject(
       {
          nome: "alo",
          email: "nataliaAlo7@gmail.com", 
      })

      expect(response.body).toEqual(
        expect.objectContaining({
          nome: "abc3",
          email: "abc3@gmail.com",
          bairro: "Ribeirânia",
          apresentacao: "bla bla bla bla",

        })
      )
    })
  })


});