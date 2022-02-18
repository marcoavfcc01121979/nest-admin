import { UserCreateDto } from './model/user-create.dto';
import { User } from './model/user.entity';
import { UserService } from './user.service';
import { UserUpdateDto } from './model/user-update.dto';
import { AuthService } from 'src/auth/auth.service';
import { Request } from 'express';
export declare class UserController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    all(page: 1): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    create(body: UserCreateDto): Promise<User>;
    get(id: number): Promise<any>;
    updateInfo(request: Request, body: UserUpdateDto): Promise<any>;
    updatePassword(request: Request, password: string, password_confirm: string): Promise<any>;
    update(id: number, body: UserUpdateDto): Promise<any>;
    delete(id: number): Promise<any>;
}
