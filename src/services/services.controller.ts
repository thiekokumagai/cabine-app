import { Controller, Get, Param } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './service.entity';

@Controller('serviceslocation')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get(':id')
  async getServices(@Param('id') id: number): Promise<Service[]> {
    return await this.servicesService.getServicesByLocationId(id);
  }
}