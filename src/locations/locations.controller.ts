import { Controller, Get, Param } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Location } from './location.entity';

@Controller('locationscabine')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get(':id')
  async getLocations(@Param('id') id: number): Promise<Location[]> {
    return await this.locationsService.getLocationsByCabineId(id);
  }
}