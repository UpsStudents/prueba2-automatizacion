
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Factura {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    detalle: string;

    @Column()
    fecha: string;

    @Column()
    valor: number;

    @Column()
    idCliente: string;
}
