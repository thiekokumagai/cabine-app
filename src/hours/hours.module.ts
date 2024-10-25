// src/hours/hours.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoursService } from './hours.service';
import { HoursController } from './hours.controller';
import { Hour } from './hour.entity';
import { Calendar } from '../calendars/calendar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hour, Calendar])],
  controllers: [HoursController],
  providers: [HoursService],
})
export class HoursModule {}