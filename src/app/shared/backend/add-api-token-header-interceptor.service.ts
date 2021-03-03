import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiTokenService} from '../services/api-token.service';

@Injectable({
  providedIn: 'root'
})
export class AddApiTokenHeaderInterceptorService implements HttpInterceptor{

  constructor(
    private readonly apiTokenService: ApiTokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiToken = this.apiTokenService.getApiToken();

    if (!apiToken){
      return next.handle(req);
    } // if.

    const headers = req.headers.append('Authorization', `Bearer ${apiToken}`);
    const authReq = req.clone({headers});
    console.log(authReq);
    return next.handle(authReq);
  }
}
