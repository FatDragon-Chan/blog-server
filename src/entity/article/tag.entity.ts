import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { ArticlesEntity } from './article.entity';

@Entity('tag')
export class TagEntity {
  @PrimaryGeneratedColumn({
    comment: '标签id',
  })
  id: number;

  @Column({
    comment: '标签名称',
  })
  tag_name: string;

  @Column({
    type: 'enum',
    enum: [0, 1],
    default: 0,
    comment: '启用禁用， 0 - 已启用， 1 - 已禁用',
  })
  status: number;

  @ManyToMany(() => ArticlesEntity)
  articles: ArticlesEntity[];

  @CreateDateColumn()
  create_time;

  @UpdateDateColumn()
  update_time;
}
