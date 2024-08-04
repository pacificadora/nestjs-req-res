import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST }) //this inner object will make our request thread safe or request safe.
export class RequestService {
  private userId: string;

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId(): string {
    return this.userId;
  }
}
