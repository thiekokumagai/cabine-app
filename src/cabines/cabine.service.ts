import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cabine } from './cabine.entity';

@Injectable()
export class CabineService {
  constructor(
    @InjectRepository(Cabine)
    private cabineRepository: Repository<Cabine>,
  ) {}

  findAll(): Promise<Cabine[]> {
    return this.cabineRepository.find();
  }

  findOne(id: string): Promise<Cabine> {
    return this.cabineRepository.findOne({ where: { id: parseInt(id) } });
  }

  create(cabine: Cabine): Promise<Cabine> {
    return this.cabineRepository.save(cabine);
  }
}