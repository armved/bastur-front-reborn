import { OrdersRoutingModule } from './orders-routing.module';
import { NgModule } from '@angular/core';
import { OrdersViewComponent } from './components/orders-view/orders-view.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { SharedModule } from '../../shared/shared.module';
import { AddOrderModalComponent } from './components/add-order-modal/add-order-modal.component';

@NgModule({
  imports: [
    SharedModule,
    OrdersRoutingModule,
  ],
  declarations: [
    OrdersViewComponent,
    OrdersTableComponent,
    AddOrderModalComponent,
  ],
  entryComponents: [
    AddOrderModalComponent,
  ],
})
export class OrdersModule {}
