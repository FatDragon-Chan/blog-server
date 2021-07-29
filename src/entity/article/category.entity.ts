import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn({
    comment: '分类id',
  })
  id: number;

  @Column({
    comment: '分类名称',
  })
  category_name: string;

  @Column({
    type: 'enum',
    enum: [0, 1],
    default: 0,
    comment: '启用禁用， 0 - 已启用， 1 - 已禁用',
  })
  status: number;

  @CreateDateColumn()
  create_time;

  @UpdateDateColumn()
  update_time;
}
