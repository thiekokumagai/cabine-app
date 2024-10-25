import { Controller, Get, Post, Param, Body,UseGuards  } from '@nestjs/common';
import { CalendarService } from './calendars.service';
import { Calendar } from './calendar.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('calendar') // Define a rota base para todas as rotas desse controlador
@UseGuards(AuthGuard)
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  // GET /cabines - Lista todas as cabines
  @Get()
  findAll(): Promise<Calendar[]> {
    return this.calendarService.findAll();
  }
}
