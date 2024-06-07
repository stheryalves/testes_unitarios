import express from 'express';
import produtoRoute from './module/produto/produto.route.js'; 
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/produto', produtoRoute);

app.listen(8080, async () => {
  console.log('Servidor funcionando!!');
});