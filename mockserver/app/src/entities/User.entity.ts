import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'csteach' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('tinyint', { name: 'isActive', default: () => "'1'" })
  isActive: number;

  @Column('varchar', { name: 'firstName', length: 255 })
  firstName: string;

  @Column('varchar', { name: 'lastName', length: 255 })
  lastName: string;
}
