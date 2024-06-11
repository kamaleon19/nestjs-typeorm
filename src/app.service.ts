import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg'; // IMPORTAMOS CLIENT DE PG PARA AGREGARLE TIPADO A LA DEPENDENCIA.

import config from './config';
import { resolve } from 'path';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject('PG') private clientPG: Client, // AQUI INYECTAMOS COMO DEPENDENCIA NUESTRA CONEXION A LA BASE DE DATOS USANDO @INJECT.
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    return `Hello World! ${apiKey} ${name}`;
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      // RETORNAMOS UNA PROMESA YA QUE QUERY NOS DEVUELVE UN CALLBACK Y PARA PODER UTILIZAR ESTE METODO EN UN CONTROLADOR DEBE RETORNAR ALGO.
      this.clientPG.query('SELECT * FROM tasks', (err, res) => {
        // CON QUERY PODEMOS HACER CONSULTAS A LA BASE DE DATOS.
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
