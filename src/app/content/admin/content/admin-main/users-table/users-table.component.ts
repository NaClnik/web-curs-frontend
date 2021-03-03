import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IUserResponse} from '../../../../../shared/interfaces/IUserResponse';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  public users$: Observable<IUserResponse[]>
  public tableDataSource: MatTableDataSource<IUserResponse>;
  public displayedColumns: string[];

  @ViewChild('paginator', {static: true})
  public paginator: MatPaginator;

  constructor(
    private readonly usersService: UsersService
  ) { }


  ngOnInit(): void {
    this.displayedColumns = [
      'surname', 'name',
      'patronymic', 'passport', 'salary',
    ]
    this.users$ = this.usersService.getEmployees();

    this.users$.subscribe(value => {
      this.tableDataSource = new MatTableDataSource<IUserResponse>(value);
      this.tableDataSource.paginator = this.paginator;
    }) // subscribe.
  }
}
