import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
    constructor(private readonly jwt: JwtService, private readonly service: ConfigService) { };

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) throw new UnauthorizedException();
        const user = await this.jwt.verifyAsync(token, { secret: this.service.get('SECRET_KEY') });

        request.user = user;
        return true;
    };

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    };
};
