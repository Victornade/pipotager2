import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/index";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getLastAcquisition()  {
    return this.http.get(this.apiUrl+'data/last');
  }

}
