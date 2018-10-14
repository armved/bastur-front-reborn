import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { Order } from '../../../../shared/models/Order';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddOrderModalComponent } from '../add-order-modal/add-order-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {
  public orders$: Observable<Order[]>;
  public displayedColumns = ['customer', 'dateDelivered', 'weight', 'pricePerKilo', 'sum'];
  private addOrderModalRef: MatDialogRef<AddOrderModalComponent>;

  constructor(
    private orderService: OrderService,
    private dialogService: MatDialog
  ) {
    this.orders$ = this.orderService.getOrders();
  }

  ngOnInit() {}

  openAddOrderModal() {
    this.addOrderModalRef = this.dialogService.open(AddOrderModalComponent, {
      width: '350px'
    });
  }
}
