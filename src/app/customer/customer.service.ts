import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Customer, CustomerDTO } from '../shared/models/Customer';
import { Observable } from 'rxjs/Observable';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class CustomerService {
  private customersCollection$: AngularFirestoreCollection<CustomerDTO>;

  constructor(private db: AngularFirestore) {
    this.customersCollection$ = this.db.collection('customers');
  }

  public createCustomerForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(),
      dateStartedToWork: new FormControl(),
    });
  }

  public getCustomers(): Observable<Customer[]> {
    return this.customersCollection$
      .snapshotChanges()
      .map((changeArray: DocumentChangeAction[]) => {
        return changeArray.map((changeItem: DocumentChangeAction) => {
          const customerDTO = changeItem.payload.doc.data() as CustomerDTO;

          return new Customer({
            id: changeItem.payload.doc.id,
            name: customerDTO.name,
            dateStartedToWork: customerDTO.dateStartedToWork,
          });
        });
      });
  }

  public addCustomer(customer: Customer) {
    return this.customersCollection$.add(customer.toJSON());
  }
}