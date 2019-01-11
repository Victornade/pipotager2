import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get(this.apiUrl+'allDatas')
  }
}
