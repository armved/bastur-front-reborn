import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  public log(...args): void {
    console.log(...args);
  }
}
