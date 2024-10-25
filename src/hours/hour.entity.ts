// src/hours/hour.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('hours')
export class Hour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hour: string;

  @Column()
  location_id: number;

  @Column()
  service_id: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}