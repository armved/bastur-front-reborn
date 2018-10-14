import { NgModule } from '@angular/core';
import { CustomersViewComponent } from './components/customers-view/customers-view.component';
import { CustomersTableComponent } from './components/customers-table/customers-table.component';
import { SharedModule } from '../../shared/shared.module';
import { AddCustomerModalComponent } from './components/add-customer-modal/add-customer-modal.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CustomersRoutingModule,
  ],
  declarations: [
    CustomersViewComponent,
    CustomersTableComponent,
    AddCustomerModalComponent,
  ],
  entryComponents: [
    AddCustomerModalComponent,
  ],
})
export class CustomersModule {}
