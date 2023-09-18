require('dotenv').config();
import express from 'express';
import router  from './infrastructure/router/prestamoRoueter';
import dbConnecion from './infrastructure/repository/configdb/configpostgrest';
import Credito from './infrastructure/model/credito'
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

// SICRONIZAR MI MODELO EN MI BD
//Credito.sync({alter: true});


   dbConnecion()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });