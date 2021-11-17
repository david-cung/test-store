import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stores {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 255, default: ''})
  name?: string;

  @Column({ type: 'varchar', length: 255})
  phone?: string;

  @Column({ type: 'varchar', length: 500, default: '', nullable: true })
  location?: string;

  @Column({ type: 'varchar', length: 255, default: '', nullable: true })
  representative?: string;

  @Column({ type: 'boolean', default: false})
  is_location_verify?: boolean;

  @Column({ type: 'simple-array'})
  services?: string[];
}
