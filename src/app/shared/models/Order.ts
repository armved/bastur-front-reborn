import { Type } from 'class-transformer';

export class Order {
  public customer: string;
  public weight: number;
  public pricePerKilo: number;

  @Type(() => Date)
  public dateOrdered: Date;

  @Type(() => Date)
  public dateDelivered: Date;

  get sum(): number {
    return Math.floor(this.weight * this.pricePerKilo);
  }
}
