import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // context 부여시 this.logger로 사용 가능 (컨텍스트를 부여하면 함수의 위치를 파악할 수 있음)
  private logger = new Logger('HTTP');

  // express 미들웨어
  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';

    // 응답이 끝났을 때
    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );

      // Context 안쓸때
      // Logger.log(
      //   `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      // );
    });
    next();
  }
}
