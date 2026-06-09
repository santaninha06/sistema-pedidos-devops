const request = require('supertest');
const app = require('../src/app');

// Mock do banco de dados para não precisar do Postgres rodando
jest.mock('pg', () => {
  const mPool = {
    query: jest.fn().mockResolvedValue({
      rows: [{ id: 1, descricao: 'Pedido Inicial', status: 'Pendente' }]
    })
  };
  return { Pool: jest.fn(() => mPool) };
});

describe('API', () => {
  test('GET /health retorna status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  test('GET /api/pedidos retorna lista de pedidos', async () => {
    const response = await request(app).get('/api/pedidos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty('descricao');
    expect(response.body[0]).toHaveProperty('status');
  });
});