import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {ApiTokenService} from '../../services/api-token.service';
import {switchMap} from 'rxjs/operators';
import {IRoleResponse} from '../../interfaces/IRoleResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private readonly apiTokenService: ApiTokenService
  ) {
  } // constructor.

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.apiTokenService.getRoleByApiToken()
      .pipe(
        switchMap((value: IRoleResponse) => {
          if(!value)
            return of(false);

          return of(value.name === 'admin');
        })
      )
  }

}
