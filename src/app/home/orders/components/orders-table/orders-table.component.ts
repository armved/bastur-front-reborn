import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../order.service';
import { Order } from '../../../../shared/models/order.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddOrderModalComponent } from '../add-order-modal/add-order-modal.component';
import { Observable } from 'rxjs';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],
})
export class OrdersTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true })
  public paginator: MatPaginator;
  public dataSource$: Observable<MatTableDataSource<Order>>;
  public displayedColumns = [
    'customer',
    'dateDelivered',
    'weight',
    'pricePerKilo',
    'sum',
    'actions',
  ];
  private addOrderModalRef: MatDialogRef<AddOrderModalComponent>;

  constructor(private orderService: OrderService, private dialogService: MatDialog) {}

  public ngOnInit(): void {
    this.dataSource$ = this.orderService.getOrders().pipe(
      map(orders => new MatTableDataSource(orders)),
      tap(dataSource => (dataSource.paginator = this.paginator)),
    );
  }

  public openAddOrderModal(): void {
    this.addOrderModalRef = this.dialogService.open(AddOrderModalComponent, {
      width: '350px',
    });
  }

  public deleteOrder(id: number): void {
    this.orderService.deleteOrder(id).subscribe();
  }
}
