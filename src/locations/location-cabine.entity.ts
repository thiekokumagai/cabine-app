import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Location } from './location.entity';
import { Cabine } from '../cabines/cabine.entity';

@Entity('location_cabine')
export class LocationCabine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location_id: number;

  @Column()
  cabine_id: number;

  @ManyToOne(() => Location, (location) => location.locationCabines)
  @JoinColumn({ name: 'location_id' }) // Coluna de junção para location
  location: Location;

  @ManyToOne(() => Cabine, (cabine) => cabine.locations)
  @JoinColumn({ name: 'cabine_id' }) // Coluna de junção para cabine
  cabine: Cabine;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}