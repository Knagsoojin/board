import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Board' })
export class Boards {
  @PrimaryGeneratedColumn()
  board_id: number;

  @Column()
  title: string;

  @Column()
  detail: string;
}
