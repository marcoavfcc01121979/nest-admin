import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private JwtService: JwtService
  ) {}
  canActivate(
    context: ExecutionContext,
  ) {
    const request = context.switchToHttp().getRequest();

    try {
      const jwt = request.cookies['jwt'];

      return this.JwtService.verify(jwt);
    } catch (error) {
      return false
    }
    
  }
}
