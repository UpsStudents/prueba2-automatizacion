import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { Factura } from './entities/factura.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FacturasService {
  constructor(
    @InjectRepository(Factura)
    private facturaRepository: Repository<Factura>,
  ) {}

  create(createFacturaDto: CreateFacturaDto) {
    return this.facturaRepository.save(createFacturaDto);
  }

  findAll() {
    return this.facturaRepository.find();
  }

  findOne(id: number) {
    return this.facturaRepository.query(
      `SELECT * FROM facturas WHERE id = ${id}`,
    );
  }

  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return this.facturaRepository.update(id, updateFacturaDto);
  }

  remove(id: number) {
    return this.facturaRepository.delete(id);
  }
}
