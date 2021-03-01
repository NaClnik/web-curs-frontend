import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../../config';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class AddBackendUrlInterceptorService implements HttpInterceptor{

  constructor(
    @Inject(BASE_URL) private baseUrl: string
  ) { }

  private static isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
    return event instanceof HttpResponse;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders = req.headers
      .append('Content-Type', 'application/json');

    const jsonRequest = req.clone({
      url: `${this.baseUrl}${req.url}`,
      headers
    });

    return next.handle(jsonRequest)
      .pipe(
        filter(AddBackendUrlInterceptorService.isHttpResponse),
        map((responseEvent: HttpResponse<any>) => {
          console.log(responseEvent);
          const bodyWithoutData = responseEvent.body && responseEvent.body.data;
          return responseEvent.clone({body: bodyWithoutData});
        })
      );
  } // intercept.
} // AddBackendUrlInterceptorService.
