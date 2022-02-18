import { ProductUpdateDto } from './models/product-update.dto';
import { ProductCreateDto } from './models/product-create.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(page: 1): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    create(body: ProductCreateDto): Promise<any>;
    get(id: number): Promise<any>;
    update(id: number, body: ProductUpdateDto): Promise<any>;
    delete(id: number): Promise<any>;
}
