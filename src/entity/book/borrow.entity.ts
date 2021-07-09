import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Books } from './book.entity';

export type BorrowType = 0 | 1; // 0 - 已归还， 1 - 借阅中

@Entity('borrow_logs')
export class BorrowLog {
  @PrimaryGeneratedColumn({
    comment: 'id',
  })
  id: number;

  @Column({
    comment: '借阅的书籍id',
  })
  book_id: number;

  @Column({
    comment: '借阅人',
  })
  borrow_user_id: number;

  @Column({
    comment: '借阅状态 0 - 已归还, 1 - 借阅中 ',
  })
  borrow_type: BorrowType;

  @Column({
    comment: '借阅开始时间',
    type: 'datetime',
  })
  borrow_start_time: number;

  @Column({
    comment: '借阅结束时间',
    type: 'datetime',
  })
  borrow_end_time: number;

  @Column({
    type: 'smallint',
    default: 0,
    comment: '创建人Id',
  })
  create_by: number;

  @CreateDateColumn()
  create_time;

  @Column({
    type: 'smallint',
    default: 0,
    comment: '更新人Id',
  })
  update_by: number;

  @UpdateDateColumn()
  update_time;

  @ManyToOne(() => Books, (books) => books.borrowLog)
  books: Books;
}
