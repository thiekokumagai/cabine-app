// src/dates/dates.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatesService {
  addDate(dayOfWeek: number): number {
    if (dayOfWeek === 6) return 2; // Sábado, pula para segunda-feira
    if (dayOfWeek === 7) return 1; // Domingo, pula para segunda-feira
    return 0; // Dias da semana normais
  }

  async datesShow(): Promise<{ date: string }[]> {
    const dateArray = [];
    let currentDate = new Date();
    
    for (let i = 0; i < 30; i++) {
      const dayOfWeek = currentDate.getDay();
      currentDate.setDate(currentDate.getDate() + this.addDate(dayOfWeek));
      
      dateArray.push({ date: currentDate.toISOString().split('T')[0] });
      
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
  }
}