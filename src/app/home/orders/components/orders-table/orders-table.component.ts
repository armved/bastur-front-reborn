import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { Order } from '../../../../shared/models/order.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddOrderModalComponent } from '../add-order-modal/add-order-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {
  public orders$: Observable<Order[]>;
  public displayedColumns = [
    'customer',
    'dateDelivered',
    'weight',
    'pricePerKilo',
    'sum',
    'actions'
  ];
  private addOrderModalRef: MatDialogRef<AddOrderModalComponent>;

  constructor(
    private orderService: OrderService,
    private dialogService: MatDialog
  ) {}

  public ngOnInit(): void {
    this.orders$ = this.orderService.getOrders();
  }

  public openAddOrderModal(): void {
    this.addOrderModalRef = this.dialogService.open(AddOrderModalComponent, {
      width: '350px'
    });
  }

  public deleteOrder(id: number): void {
    this.orderService.deleteOrder(id).subscribe();
  }
}
