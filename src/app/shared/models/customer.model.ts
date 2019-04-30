import { Type } from 'class-transformer';

export class Customer {
  public id: number;

  public name: string;

  @Type(() => Date)
  public dateStartedToWork: string;
}
