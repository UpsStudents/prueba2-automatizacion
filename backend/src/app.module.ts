import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacturasModule } from './facturas/facturas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './facturas/entities/factura.entity';
import { FacturasController } from './facturas/facturas.controller';
import { FacturasService } from './facturas/facturas.service';
import { readFileSync } from 'fs';


@Module({
  imports: [FacturasModule,TypeOrmModule.forRoot({
    type: 'cockroachdb',
    host: 'wiggly-parrot-1252.g8z.cockroachlabs.cloud',
    port: 26257,
    username: 'factura_user',
    password: 'Gg3cQ9sp_YBS9g7tRQ0Jhw',
    database: 'facturadb',
    ssl: {
      ca: readFileSync('./root.crt').toString(),
    },
    extra: {
      options: "--cluster=wiggly-parrot-1252"
    },
    entities: [Factura],
    synchronize: true,
  })],
  exports:[TypeOrmModule]
})
export class AppModule {}
