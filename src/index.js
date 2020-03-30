const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.unsubscribe(cors());
app.use(express.json());
app.use(routes);

/** 
 * Rota / Recurso
 */
 /**
  * Metodo HTTP:
  * 
  * GET : Buscar/Lista uma Informação do back-end
  * POST: Criar uma informação no back-end
  * PUT : Alterar uma informação no back-end
  * DELETE: Deleta uma informação no back-end
  */
 /**
  * Tipos de parâmetros:
  * 
  * 
  * Query:Parâmetros nomeados enviados nas rotas após "?", (filtros, paginação)
  * Route params: Parâmetros utilizado para modificar recursos
  * Request Bory: Corpo da requisição,utilizado para criar ou utilizar recursos
  */

  /**
   * SQL: MySQL,SQLite, PostgreSQL, Oracle, Microsoft SQL Serve
   * NoSQL: MongoDB, CouchDB,etc...
   */

   /**
    * Driver: SELECT *FROM users
    * Query builder: table('users').select()
    */



app.listen('3333');