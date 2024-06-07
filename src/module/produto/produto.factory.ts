import Produto from "./produto.model.js";
import KnexService from "../../service/knex.js";

export default new Produto(new KnexService);