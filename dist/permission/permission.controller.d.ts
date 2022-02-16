import { PermissionService } from './permission.service';
export declare class PermissionController {
    private premissionService;
    constructor(premissionService: PermissionService);
    all(): Promise<any[]>;
}
