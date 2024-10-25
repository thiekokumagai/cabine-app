import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  } from './calendars.controller';
import { CalendarService } from './calendars.service';
import { Calendar } from './calendar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calendar])],
  controllers: [Calendar],
  providers: [CalendarService],
})
export class CabinesModule {}