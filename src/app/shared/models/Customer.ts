import { ICustomer } from '../interfaces/ICustomer';

export interface CustomerDTO {
  id: string;
  name: string;
  dateStartedToWork: Date;
}

export class Customer implements ICustomer {
  private _id: string;
  private _name: string;
  private _dateStartedToWork: Date;

  constructor(customer: CustomerDTO) {
    this.setId(customer.id);
    this.setName(customer.name);
    this.setDateStartedToWork(customer.dateStartedToWork);
  }

  public toJSON(): CustomerDTO {
    return {
      id: this.getId(),
      name: this.getName(),
      dateStartedToWork: this.getDateStartedToWork(),
    };
  }

  public getId(): string {
    return this._id;
  }

  public setId(id: string): void {
    this._id = id;
  }

  public getName(): string {
    return this._name;
  }

  public setName(name: string): void {
    this._name = name;
  }

  public getDateStartedToWork(): Date {
    return this._dateStartedToWork;
  }

  public setDateStartedToWork(dateStartedToWork: Date): void {
    this._dateStartedToWork = dateStartedToWork;
  }

}
