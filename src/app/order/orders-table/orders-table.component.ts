import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order, OrderJSON } from '../../shared/models/Order';
import { MatDialog } from '@angular/material';
import { AddOrderModalComponent } from '../add-order-modal/add-order-modal.component';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {
  public orders: OrderJSON[];
  public displayedColumns = ['customer', 'weight', 'pricePerKilo', 'sum'];

  constructor(
    private orderService: OrderService,
    private dialogService: MatDialog
  ) {
    this.orderService.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders.map((order: Order) => order.toJSON());
    });
  }

  ngOnInit() {}

  openAddOrderModal() {
    const addOrderModalRef = this.dialogService.open(AddOrderModalComponent, {
      height: '400px',
      width: '600px'
    });
  }
}
