import { Module } from '@nestjs/common';
import { GithubStrategy } from './auth.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({ 
    imports: [JwtModule.registerAsync({
        useFactory: async (configService: ConfigService) => {
            return {
                signOptions: { expiresIn: '10h' },
                secret: configService.get('JWT_SECRET'),
            }
        },
        inject: [ConfigService],
    })
],
    providers: [GithubStrategy]
 })
export class AuthModule {}
