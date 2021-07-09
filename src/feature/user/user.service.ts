import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// import { CryptoUtil } from '../../common/utils/crypto.util';
import { Users } from '../../entity/users/user.entity';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectRepository(Users) private readonly userRepo: Repository<Users>, // @Inject(CryptoUtil) private readonly cryptoUtil: CryptoUtil,
  ) {}

  // 初始化
  async onModuleInit() {
    const adminName = 'chenzian';
    if (await this.findOneByAccount(adminName)) return;
    // 初始化系统管理员
    const admin = this.userRepo.create({
      account_name: adminName,
      password: '123456',
      password_salt: '123456',
      real_name: '陈子安',
      mobile: '13000000000',
      email: 'fengfeng1995@vip.qq.com',
      github_url: 'https://github.com/FatDragon-Chan',
      juejin_url: 'https://juejin.cn/user/3465302809262936',
      role: 0,
    });
    await this.userRepo.save(admin);
  }

  /**
   * 用户登录
   *
   * @param account_name 登录账号
   * @param password 登录密码
   */
  async login(account_name: string, password: string): Promise<void> {
    const user = await this.findOneByAccount(account_name);
    if (!user || user.password !== password)
      throw new BadRequestException('登录账号有误');
  }

  /**
   * 用户注册
   *
   * @param user 用户信息
   */
  // async register(user: UserEntity): Promise<void> {
  //   const existing = await this.findOneByAccount(user.account);
  //   if (existing) throw new HttpException('账号已存在', 409);
  //   user.password = this.cryptoUtil.encryptPassword(user.password);
  //   await this.userRepo.save(this.userRepo.create(user));
  // }

  // /**
  //  * 删除用户
  //  *
  //  * @param id 用户ID
  //  */
  // async remove(id: number): Promise<void> {
  //   const existing = await this.userRepo.findOne(id);
  //   if (!existing)
  //     throw new HttpException(`删除失败，ID 为 '${id}' 的用户不存在`, 404);
  //   await this.userRepo.remove(existing);
  // }

  // /**
  //  * 更新用户
  //  *
  //  * @param id 用户ID
  //  * @param updateInput updateInput
  //  */
  // async update(id: number, updateInput: UserEntity) {
  //   const existing = await this.userRepo.findOne(id);
  //   if (!existing)
  //     throw new HttpException(`更新失败，ID 为 '${id}' 的用户不存在`, 404);
  //   if (updateInput.account) existing.account = updateInput.account;
  //   if (updateInput.password)
  //     existing.password = this.cryptoUtil.encryptPassword(updateInput.password);
  //   if (updateInput.name) existing.name = updateInput.name;
  //   await this.userRepo.save(existing);
  // }

  /**
   * 通过登录账号查询用户
   *
   * @param account_name 登录账号
   */
  async findOneByAccount(account_name): Promise<Users> {
    return await this.userRepo.findOne({ account_name });
  }

  /**
   * 查询用户及其帖子的信息
   *
   * @param id 用户ID
   */
  // async findOneWithPostsById(id: number): Promise<UserEntity> {
  //   return await this.userRepo.findOne(id, { relations: ['posts'] });
  // }

  /**
   * 查询所有用户
   */
  async findAll(): Promise<Users[]> {
    return await this.userRepo.find();
  }
}
