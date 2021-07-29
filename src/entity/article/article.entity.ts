import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { TagEntity } from './tag.entity';

@Entity('article')
export class ArticlesEntity {
  @PrimaryGeneratedColumn({
    comment: '文章id',
  })
  id: number;

  @Column({
    comment: '文章标题',
  })
  title: string;

  @Column({
    comment: '副标题',
  })
  desc: string;

  @Column({
    comment: '文章cdn地址',
  })
  content: string;

  @Column({
    comment: '文章主图',
  })
  img: string;

  @Column({
    type: 'enum',
    enum: [0, 1],
    default: 0,
    comment: '文章状态， 0 - 已发布， 1 - 已下架',
  })
  status: number;

  @Column({
    type: 'enum',
    enum: [0, 1],
    default: 0,
    comment: '删除状态， 0 - 未删除， 1 - 已删除',
  })
  is_delete: number;

  @Column({
    comment: '文章观看人数',
    default: 0,
  })
  visited: number;

  @Column({
    comment: '评论',
  })
  comment: string;

  @Column({
    comment: '文章点赞人数',
    default: 0,
  })
  likes: number;

  @Column({
    type: 'enum',
    enum: [0, 1],
    default: 0,
    comment: '是否原创 0 - 原创， 1 - 非原创',
  })
  create_by: number;

  @Column({
    comment: '文章转载地址',
  })
  original_url: string;

  @Column({
    comment: '转载作者',
  })
  original_author: string;

  @OneToOne(() => CategoryEntity, {
    eager: true,
  })
  @JoinColumn({
    name: 'category_id',
  })
  category: CategoryEntity;

  @ManyToMany(() => TagEntity, {
    eager: true,
  })
  @JoinTable({
    name: 'article_tag', // 此关系的联结表的表名
    joinColumn: {
      name: 'article_id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
    },
  })
  tag: TagEntity[];

  @CreateDateColumn()
  create_time;

  @UpdateDateColumn()
  update_time;
}
