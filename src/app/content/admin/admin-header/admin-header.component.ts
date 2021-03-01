import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  @Input()
  public titleText: string = '';

  @Input()
  public sideNavDrawer!: MatDrawer;

  ngOnInit(): void {
  }
}
