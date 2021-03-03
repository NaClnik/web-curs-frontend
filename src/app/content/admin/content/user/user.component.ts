import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {Observable} from 'rxjs';
import {IUserResponse} from '../../../../shared/interfaces/IUserResponse';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user$: Observable<IUserResponse>

  constructor(
    private readonly usersService: UsersService,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.user$ = this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) => {
          const userId = +paramMap.get('userId');
          return this.usersService.getEmployeeById(userId);
        })
      );
  } // ngOnInit.

}
