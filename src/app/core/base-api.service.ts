import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logger } from '@shared/services/logger.service';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiRequest } from '../shared/models/api/api-request.model';

@Injectable()
export class BaseApiService {
  protected baseApiUrl = 'http://localhost:3000';

  constructor(private logger: Logger, protected http: HttpClient) {}

  public makeRequest<T>(request: ApiRequest, Model: ClassType<T>, isArray?: false): Observable<T>;
  public makeRequest<T>(request: ApiRequest, Model: ClassType<T>, isArray?: true): Observable<T[]>;
  public makeRequest<T>(request: ApiRequest, Model: ClassType<T>): Observable<T | T[]> {
    const method = request.getMethod();
    const url = request.getUrl();
    const body = request.getBody();

    return this.http.request(method, url, { body }).pipe(
      tap(response => this.logger.log(`${method} ${url}`, response)),
      map(response => plainToClass(Model, response)),
    );
  }
}
