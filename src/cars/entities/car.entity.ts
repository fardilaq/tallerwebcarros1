import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import type { Relation } from 'typeorm';
import { Dealership } from '../../dealerships/entities/dealership.entity.js';

export enum CarStatus {
  AVAILABLE = 'AVAILABLE',
  RESERVED = 'RESERVED',
  SOLD = 'SOLD'
}

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  plate: string;

  @Column({ type: 'varchar', length: 100 })
  brand: string;

  @Column({ type: 'varchar', length: 150 })
  model: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'int', default: 0 })
  price: number;

  @Column({ type: 'varchar', length: 20, default: CarStatus.AVAILABLE })
  status: CarStatus;

  @Column({ type: 'int', nullable: true })
  dealership_id: number | null;

  @ManyToOne(() => Dealership, (dealership: Dealership) => dealership.cars, { nullable: true })
  @JoinColumn({ name: 'dealership_id' })
  dealership: Relation<Dealership> | null;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}