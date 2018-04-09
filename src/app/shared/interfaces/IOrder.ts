export interface IOrder {
  getCustomer(): string;
  setCustomer(customer: string): void;

  getSum(): number;

  getWeight(): number;
  setWeight(weight: number): void;

  getPricePerKilo(): number;
  setPricePerKilo(pricePerKilo: number): void;

  getDateOrdered(): Date;
  setDateOrdered(dateOrdered: Date): void;

  getDateDelivered(): Date;
  setDateDelivered(dateDelivered: Date): void;
}
