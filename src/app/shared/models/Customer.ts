import { Type } from 'class-transformer';

export class Customer {
  public id: string;

  public name: string;

  @Type(() => Date)
  public dateStartedToWork: string;
}
