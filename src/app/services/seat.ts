import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response
} from "@angular/http";
import {
  Observable
} from "rxjs/Observable";
import {
  SeatInfo
} from "app/models/seat-info";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const url: string = "http://localhost:5000/api";

@Injectable()
export class SeatService {

  constructor(private http: Http) {}

  getSeatInfoList(): Observable < SeatInfo[] > {
    return this.http.get(url + '/seat/info')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
}
