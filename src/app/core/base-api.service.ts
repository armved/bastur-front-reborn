import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseApiService {
  protected baseApiUrl = 'http://localhost:3000';

  constructor(protected http: HttpClient) {}
}
