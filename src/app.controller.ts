import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user') // GET /abc/user
  getUser(): string {
    const user = this.appService.getUser();
    return user;
  }

  @Post('user') // POST /abc/user
  postUser(): string {
    this.appService.postUser();
    return { code: 'SUCCESS', data: user };
  }

  @Post('user') // POST /abc/user
  postUser(): string {
    this.appService.postUser();
    return { code: 'SUCCESS', data: 'hello' };
  }
}
