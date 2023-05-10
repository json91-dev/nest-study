import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getUser(): string {
    const user = await User.findOne();
    return user;
  }

  async postUser(): string {
    const user = await User.create();
    return user;
  }
}
