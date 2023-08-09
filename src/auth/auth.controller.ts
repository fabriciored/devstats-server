import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor() {}

    @Get()
    @UseGuards(AuthGuard('github'))
    async githubLogin() {

    }

    @Get('callback')
    @UseGuards(AuthGuard('github'))
    async authCallback(@Req() req) {
    return req.user;
    }

}
