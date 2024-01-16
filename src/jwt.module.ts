import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        JwtModule.registerAsync({
            global: true, inject: [ConfigService],
            useFactory: (service: ConfigService) => ({ secret: service.get('SECRET_KEY') })
          }),
    ]
})
export class JWTModule { }
