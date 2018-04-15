import { NgModule } from '@angular/core';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { SharedModule } from '../shared/shared.module';
import { OrderService } from './order.service';
import { AddOrderModalComponent } from './add-order-modal/add-order-modal.component';
import { AddCustomerModalComponent } from '../customer/add-customer-modal/add-customer-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [OrdersTableComponent],
  declarations: [OrdersViewComponent, OrdersTableComponent, AddOrderModalComponent, AddCustomerModalComponent],
  providers: [OrderService],
  entryComponents: [AddOrderModalComponent]
})
export class OrderModule {}
