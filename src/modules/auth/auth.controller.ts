import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express'
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private jwtService: JwtService, private readonly authService: AuthService ) {}

    @Get()
    @UseGuards(AuthGuard('github'))
    async githubLogin() {
        return this.authService.githubLogin();
    }

    @Get('callback')
    @UseGuards(AuthGuard('github'))
    async authCallback(@Req() req: Request) {
    return this.authService.authCallback(req);
    }

}
