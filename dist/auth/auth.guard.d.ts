import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthGuard implements CanActivate {
    private JwtService;
    constructor(JwtService: JwtService);
    canActivate(context: ExecutionContext): any;
}
