import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {ApiTokenService} from '../../../shared/services/api-token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  constructor(
    private readonly apiTokenService: ApiTokenService,
    private readonly router: Router
  ) {
  }

  @Input()
  public titleText: string = '';

  @Input()
  public sideNavDrawer!: MatDrawer;

  ngOnInit(): void {
  }

  public exit(): void{
    this.apiTokenService.removeApiToken();
    this.router.navigate(['']);
  } // exit.
}
