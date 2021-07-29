// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
// } from 'typeorm';
//
// @Entity('book_infos')
// export class BookInfos {
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @Column({
//     comment: '作者',
//   })
//   author: string;
//
//   @Column({
//     comment: '译者',
//   })
//   translator: string;
//
//   @Column({
//     comment: '出版社',
//   })
//   press: string;
//
//   @Column({
//     comment: '页数',
//   })
//   page_count: string;
//
//   @Column({
//     comment: '出版时间',
//   })
//   press_time: string;
//
//   @Column({
//     comment: '定价',
//   })
//   price: string;
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
// }
