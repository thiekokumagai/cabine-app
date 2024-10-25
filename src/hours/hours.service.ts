import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hour } from './hour.entity';
import { Calendar } from '../calendars/calendar.entity';
import * as moment from 'moment-timezone';

@Injectable()
export class HoursService {
  constructor(
    @InjectRepository(Hour)
    private hourRepository: Repository<Hour>,

    @InjectRepository(Calendar)
    private calendarRepository: Repository<Calendar>,
  ) {}

  async findAvailableHours(
    location_id: number,
    service_id: number,
    date: string,
    cabine_id: number,
  ): Promise<any[]> {
    const hours = await this.hourRepository.find({
      where: { location_id, service_id },
    });
  
    return Promise.all(
      hours.map(async (hour) => {
        const timezone = 'America/Cuiaba';
        const dateTime1 = moment.tz(`${date} ${hour.hour}`, timezone);
        const dateTime2 = moment.tz(new Date(), timezone);
  
        // Verifica se já existe um registro na tabela de agendamentos para este horário
        const registro = await this.calendarRepository
          .createQueryBuilder('calendar')
          .innerJoin('hours', 'h', 'calendar.hour_id = h.id')
          .where('calendar.cabine_id = :cabine_id', { cabine_id })
          .andWhere('calendar.date = :date', { date })
          .andWhere('h.id = :hourId', { hourId: hour.id })
          .getOne();
  
        const unavailable = !!registro || dateTime2.isAfter(dateTime1) ? true : false;
  
        return { ...hour, unavailable };
      }),
    );
  }
}
