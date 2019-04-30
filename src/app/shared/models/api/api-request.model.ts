type MethodTypes = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export class ApiRequest {
  private url: string;
  private method: MethodTypes;
  private body: any;

  constructor(private baseUrl: string) {}

  public withUrl(url: string): this {
    this.url = url;
    return this;
  }

  public getUrl(): string {
    return this.baseUrl + this.url;
  }

  public withMethod(method: MethodTypes): this {
    this.method = method;
    return this;
  }

  public getMethod(): MethodTypes {
    return this.method;
  }

  public withBody(body: any): this {
    this.body = body;
    return this;
  }

  public getBody(): any {
    return this.body;
  }
}
