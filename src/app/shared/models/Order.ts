import { IOrder } from '../interfaces/IOrder';

export interface OrderDTO {
  customer: string;
  weight: number;
  pricePerKilo: number;
  dateOrdered: Date;
  dateDelivered: Date;
}

export interface OrderJSON extends OrderDTO {
  sum: number;
}

export class Order implements IOrder {
  private _customer: string;
  private _weight: number;
  private _pricePerKilo: number;
  private _dateOrdered: Date;
  private _dateDelivered: Date;

  constructor(order: OrderDTO) {
    this.setCustomer(order.customer);
    this.setWeight(order.weight);
    this.setPricePerKilo(order.pricePerKilo);
    this.setDateOrdered(order.dateOrdered);
    this.setDateDelivered(order.dateDelivered);
  }

  public toJSON(): OrderJSON {
    return {
      customer: this.getCustomer(),
      weight: this.getWeight(),
      pricePerKilo: this.getPricePerKilo(),
      sum: this.getSum(),
      dateOrdered: this.getDateOrdered(),
      dateDelivered: this.getDateDelivered(),
    };
  }

  public getCustomer(): string {
    return this._customer;
  }

  public setCustomer(customer: string): void {
    this._customer = customer;
  }

  public getSum(): number {
    return Math.floor(this.getWeight() * this.getPricePerKilo());
  }

  public getWeight(): number {
    return this._weight;
  }

  public setWeight(weight: number): void {
    this._weight = weight;
  }

  public getPricePerKilo(): number {
    return this._pricePerKilo;
  }

  public setPricePerKilo(pricePerKilo: number): void {
    this._pricePerKilo = pricePerKilo;
  }

  public getDateOrdered(): Date {
    return this._dateOrdered;
  }

  public setDateOrdered(dateOrdered: Date): void {
    this._dateOrdered = dateOrdered;
  }

  public getDateDelivered(): Date {
    return this._dateDelivered;
  }

  public setDateDelivered(dateDelivered: Date): void {
    this._dateDelivered = dateDelivered;
  }

}
