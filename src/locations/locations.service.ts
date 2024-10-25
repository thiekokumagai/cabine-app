import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationCabine } from './location-cabine.entity';
import { Location } from './location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(LocationCabine)
    private readonly locationCabineRepository: Repository<LocationCabine>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async getLocationsByCabineId(cabineId: number): Promise<Location[]> {
    const locations = await this.locationCabineRepository
      .createQueryBuilder('locationCabine')
      .innerJoinAndSelect('locationCabine.location', 'location')
      .where('locationCabine.cabine_id = :cabineId', { cabineId })
      .getMany();

    // Mapear para o formato desejado
    return locations.map(locationCabine => ({
      id: locationCabine.location.id,
      title: locationCabine.location.title,
      created_at: locationCabine.location.created_at,
      updated_at: locationCabine.location.updated_at,
    }));
  }
}