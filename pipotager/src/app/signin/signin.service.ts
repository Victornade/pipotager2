import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  public user : {};
  apiUrl = environment.apiUrl;

  constructor(  private http: HttpClient) { }

  public signin(username: string, password: string) {

    var query= this.http.put<any>(this.apiUrl+'auth', { "login":username, "password":password });

    query.subscribe(data =>{

          this.user=data.user;
          // login successful if there's a jwt token in the response
      console.log(this.user)
          if (this.user && this.user['token']) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            localStorage.setItem('x-auth-token', this.user['token']);
          }

        },
        err => {
            console.log(err)
        });

    return query;

  }



}
