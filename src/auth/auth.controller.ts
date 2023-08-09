import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
    constructor(private readonly jwtService: JwtService ) {}

    @Get()
    @UseGuards(AuthGuard('github'))
    async githubLogin() {

    }

    @Get('callback')
    @UseGuards(AuthGuard('github'))
    async authCallback(@Req() req) {
    const user = req.user;
    const payload = { username: user.username, sub: user.userId };
    return { accessToken: this.jwtService.sign(payload)}
    }

}
