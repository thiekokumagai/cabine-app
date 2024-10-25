import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at: Date | null;

  @Column()
  password: string;

  @Column({ nullable: true })
  remember_token: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ length: 11 })
  cpf: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  surname: string;

  @Column({ nullable: true })
  user_id_incontrolapi: number;

  @Column({ nullable: true })
  image_id_incontrolapi: number;

  @Column({ nullable: true })
  image_file: string;

  @Column({ nullable: true })
  image_timestamp: string;

  @Column({ nullable: true })
  image_content_type: string;

  @Column({ nullable: true })
  image_face: string;

  @Column({ nullable: true, length: 15 })
  phone: string;

  @Column({ type: 'date', nullable: true })
  birthdate: Date | null;
}