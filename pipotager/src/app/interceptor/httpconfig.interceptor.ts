import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() { }
  //function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    //how to update the request Parameters
    var token="";
    if(localStorage.getItem('x-auth-token')) {
      token = localStorage.getItem('x-auth-token')
    }

    const updatedRequest = request.clone({
      headers: request.headers.set("x-auth-token", token)
    });


    return next.handle(updatedRequest);
  }
}
