import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class ApiService {

  constructor(
    protected environment: any,
    protected httpClient: HttpClient,
  ) {
  }

  protected get = (endpoint: string, params?: any):  Observable<any[]> => {
    return new Observable<any[]>((subscriber) => {
      if (!params){
        params = new Object();
      }
      params.apiKey = this.environment.apiKey;
      this.httpClient
        .get(`${this.environment.baseHref}/${endpoint}`, {params})
        .subscribe((data: any) => {
            if (!data) {
              subscriber.error(null);
            } else {
              subscriber.next(data);
            }
          },
          (error) => subscriber.error(error),
          () => {
          },
        );
    });

  };
}
