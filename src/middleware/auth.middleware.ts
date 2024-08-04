import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { RequestService } from 'src/request.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly requestService: RequestService) {}

  private readonly logger = new Logger(AuthMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(AuthMiddleware.name);
    const userId = '123';
    this.requestService.setUserId(userId);

    next();
  }
}
