import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/index";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  sendConfig (config: {}): Observable<any> {
    return this.http.post<{}>(this.apiUrl+'configuration', config)
      .pipe(

      );
  }



  getConfig(): Observable<any>  {
    return this.http.get(this.apiUrl+'configuration')
      .pipe(  map(null));
  }

}
