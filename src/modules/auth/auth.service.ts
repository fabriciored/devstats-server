import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async githubLogin() {}

  async authCallback(req: Request) {
    const user = req.user;
    const payload = { sub: user.id, name: user.username };
    console.log(payload);
    return { accessToken: this.jwtService.sign(payload) };
  }
}
