CREATE TABLE IF NOT EXISTS pedidos(
 id SERIAL PRIMARY KEY,
 descricao TEXT NOT NULL,
 status VARCHAR(50) DEFAULT 'Pendente'
);

INSERT INTO pedidos(descricao)
VALUES('Pedido Inicial');