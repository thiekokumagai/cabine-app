// src/calendars/calendar.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('calendars')
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  user_id: number;

  @Column()
  location_id: number;

  @Column()
  service_id: number;

  @Column({ type: 'date' })
  date: string;

  @Column()
  hour_id: number;

  @Column()
  number_code: string;

  @Column()
  received: string;

  @Column()
  cabine_id: number;
}