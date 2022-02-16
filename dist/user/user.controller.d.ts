import { UserCreateDto } from './model/user-create.dto';
import { User } from './model/user.entity';
import { UserService } from './user.service';
import { UserUpdateDto } from './model/user-update.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    all(page: 1): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    create(body: UserCreateDto): Promise<User>;
    get(id: number): Promise<any>;
    update(id: number, body: UserUpdateDto): Promise<any>;
    delete(id: number): Promise<any>;
}
