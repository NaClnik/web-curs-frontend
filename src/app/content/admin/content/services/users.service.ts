import {Inject, Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IUserResponse} from '../../../../shared/interfaces/IUserResponse';

@Injectable()
export class UsersService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getEmployees(): Observable<IUserResponse[]>{
    return this.http.get<IUserResponse[]>(`/admin/users`).pipe(
      catchError((err) => {
        return of([]);
      }) // catchError.
    ); // pipe.
  } // getEmployees.

  public getEmployeeById(id: number): Observable<IUserResponse | null>{
    return this.http.get<IUserResponse>(`/admin/users/${id}`).pipe(
      catchError(err => {
        return of(null);
      }) // catchError.
    ) // pipe.
  } // getEmployeeById.

  public registerEmployee(data: any): Observable<any>{
    console.log('register employee');
    return this.http.post('/admin/users', data)
      .pipe(
        catchError(err => {
          console.log(err);
          return of(null);
        }) // catchError.
      ) // pipe.
  } // registerEmployee.
} // UsersService.
