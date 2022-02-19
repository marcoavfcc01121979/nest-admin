import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Order } from './models/order.entiry';
export declare class OrderService extends AbstractService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
}
