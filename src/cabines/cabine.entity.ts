import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,OneToMany  } from 'typeorm';
import { LocationCabine } from '../locations/location-cabine.entity';

@Entity('cabines') // Defina o nome da tabela explicitamente
export class Cabine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  address: string;

  @Column()
  grupo_intelbras: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
  
   // Adiciona o relacionamento OneToMany com LocationCabine
   @OneToMany(() => LocationCabine, (locationCabine) => locationCabine.cabine)
   locations: LocationCabine[];
}