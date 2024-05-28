import express from 'express';
import produtoRoute from './src/module/produto/produto.route.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());

app.use('/produto', produtoRoute);

app.listen(8080, () => {
  console.log('Servidor funcionando!!');
});