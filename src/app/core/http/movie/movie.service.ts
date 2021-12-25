import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiService} from "../api.service";
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends ApiService {

  constructor(
    private http: HttpClient
  ) {
    super(environment, http);
  }

  getMovies = (input: string): Observable<any[]> => {
    return new Observable<any[]>((subscriber) => {
      this.get('', {
        type: 'movie',
        s: input
      }).subscribe((data: any) => {
          if (data.Response === 'True') {
            subscriber.next(data["Search"]);
          } else {
            subscriber.error(data.Error);
          }
        },
        (error) => subscriber.error(error),
        () => {
        },
      );
    });
  };
}
