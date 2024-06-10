import * as express from 'express';
//import { Request, Response } from 'express';
import produtoFactory from './produto.factory.js';
import { sum } from '../../libs/sum.js';

const router = express.Router();

router.get('/', async (_, res) => {
  const data = await produtoFactory.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req, res) => {
  const data = await produtoFactory.store(req.body);
  return res.status(200).json({ data });
});

router.post('/sum', async (req, res) => {
  const response = sum(req.body.a, req.body.b)
  return res.status(200).json(response)
})

export default router;
