import { registerAs } from '@nestjs/config'; // EL ARCHIVO CONFIG SIRVE PARA TIPAR LAS VARIABLES DE ENTORNO, ES DECIR QUE A LA HORA DE INYECTARLAS NO TENGAMOS QUE ESCRIBIRLAS MANUALMENTE.

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    postgres: {
      dbName: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
    },
    apiKey: process.env.API_KEY,
  };
});
