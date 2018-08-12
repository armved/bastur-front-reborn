import { NgModule } from '@angular/core';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { CustomerService } from './customer.service';
import { SharedModule } from '../shared/shared.module';
import { AddCustomerModalComponent } from './add-customer-modal/add-customer-modal.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CustomersViewComponent, CustomersTableComponent, AddCustomerModalComponent],
  providers: [CustomerService],
  entryComponents: [AddCustomerModalComponent]
})
export class CustomerModule {}
