import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { LocationCabine } from './location-cabine.entity';

@Entity('locations') // Defina o nome da tabela explicitamente
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => LocationCabine, (locationCabine) => locationCabine.location, { nullable: true }) // Torna a propriedade opcional
  locationCabines?: LocationCabine[]; // Agora é opcional
}