import { Component, OnInit } from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public title = 'ngx171220 ';
  public drawer!: MatDrawer;

  public setSideNav(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  ngOnInit(): void {
  }

}
