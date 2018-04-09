import { NgModule } from '@angular/core';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { SharedModule } from '../shared/shared.module';
import { OrderService } from './order.service';
import { AddOrderModalComponent } from './add-order-modal/add-order-modal.component';

@NgModule({
  imports: [SharedModule],
  exports: [OrdersTableComponent],
  declarations: [OrdersViewComponent, OrdersTableComponent, AddOrderModalComponent],
  providers: [OrderService],
  entryComponents: [AddOrderModalComponent]
})
export class OrderModule {}
