import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order, OrderJSON } from '../../shared/models/Order';

export interface Order {
  customer: string;
  price: number;
}

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {
  public orders: OrderJSON[];
  public displayedColumns = ['customer', 'weight', 'pricePerKilo', 'sum'];

  constructor(private orderService: OrderService) {
    this.orderService.getOrders()
      .subscribe((orders: Order[]) => {
        this.orders = orders.map((order: Order) => order.toJSON());
        console.log(this.orders);
      });
  }

  ngOnInit() {}
}
