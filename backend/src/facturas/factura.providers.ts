import { DataSource } from 'typeorm';
import { Factura } from './entities/factura.entity';

export const facturaProviders = [
  {
    provide: 'FACTURA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Factura),
    inject: ['DATA_SOURCE'],
  },
];