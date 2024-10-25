import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async getServicesByLocationId(locationId: number): Promise<Service[]> {
    return await this.serviceRepository.find({
      where: { location_id: locationId },
    });
  }
}