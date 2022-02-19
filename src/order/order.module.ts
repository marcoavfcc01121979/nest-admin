import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { OrderItem } from './models/order-item.entity';
import { Order } from './models/order.entiry';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([Order, OrderItem])
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
