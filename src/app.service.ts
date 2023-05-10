import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    console.log(process.env.SECRET);
    return process.env.SECRET;
  }
}
