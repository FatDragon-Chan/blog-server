// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
//   OneToOne,
//   JoinColumn,
//   OneToMany,
//   JoinTable,
// } from 'typeorm';
// import { BookInfos } from './bookInfo.entity';
// import { BorrowLog } from './borrow.entity';
//
// @Entity('books')
// export class Books {
//   @PrimaryGeneratedColumn({
//     comment: '书籍id',
//   })
//   id: number;
//
//   @Column({
//     comment: '书籍ISBN编号',
//   })
//   isbn: string;
//
//   @Column({
//     comment: '书籍名称',
//   })
//   title: string;
//
//   @Column({
//     comment: '书籍图片',
//   })
//   cover_url: string;
//
//   @Column({
//     comment: '豆瓣页',
//   })
//   url: string;
//
//   @Column({
//     type: 'smallint',
//     default: 0,
//     comment: '创建人Id',
//   })
//   create_by: number;
//
//   @CreateDateColumn()
//   create_time;
//
//   @Column({
//     type: 'smallint',
//     default: 0,
//     comment: '更新人Id',
//   })
//   update_by: number;
//
//   @UpdateDateColumn()
//   update_time;
//
//   @OneToOne(() => BookInfos)
//   @JoinColumn({ name: 'book_info_id' })
//   bookInfos: BookInfos;
//
//   @OneToMany(() => BorrowLog, (borrow) => borrow.book_id)
//   borrowLog: BorrowLog;
// }
