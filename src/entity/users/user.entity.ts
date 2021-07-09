import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export type UserRoleType = 0 | 1 | 2 | 3; // 0 - 超级管理员， 1 - 管理员， 2 - 开发 3 - 只读
export type UserStatusType = 0 | 1 | 2; // 0 - 失效， 1 - 有效， 2 - 删除

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({
    comment: '用户id',
  })
  user_id: number;

  @Column({
    type: 'varchar',
    length: 24,
    comment: '用户账号',
  })
  account_name: string;

  @Column({
    type: 'varchar',
    length: 20,
    comment: '真实姓名',
  })
  real_name: string;

  @Column({
    type: 'char',
    length: 32,
    comment: '密码',
  })
  password: string;

  @Column({
    type: 'char',
    length: 6,
    comment: '密码盐',
  })
  password_salt: string;

  @Column({
    type: 'varchar',
    length: 11,
    comment: '手机号码',
  })
  mobile: string;

  @Column({
    comment: 'email',
  })
  email: string;

  @Column({
    comment: 'github地址',
  })
  github_url: string;

  @Column({
    comment: '掘金地址',
  })
  juejin_url: string;

  @Column({
    comment: '简历',
  })
  resume_url: string;

  @Column({
    type: 'enum',
    enum: [0, 1, 2, 3],
    default: 3,
    comment:
      '用户角色：0-超级管理员|1-管理员|2-开发&测试&运营|3-普通用户（只能查看）',
  })
  role: UserRoleType;

  @Column({
    type: 'enum',
    enum: [0, 1, 2],
    default: 1,
    comment: '状态：0-失效|1-有效|2-删除',
  })
  status: UserStatusType;

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
}
