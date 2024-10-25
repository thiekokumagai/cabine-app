// src/hours/hours.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { HoursService } from './hours.service';

@Controller('hours')
export class HoursController {
  constructor(private readonly hoursService: HoursService) {}

  @Get(':location_id/:service_id/:date/:cabine_id')
  async getAvailableHours(
    @Param('location_id') location_id: number,
    @Param('service_id') service_id: number,
    @Param('date') date: string,
    @Param('cabine_id') cabine_id: number,
  ) {
    return this.hoursService.findAvailableHours(location_id, service_id, date, cabine_id);
  }
}