import {Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {

  @ViewChild('drawer', {static: true})
  public drawerInst!: MatDrawer;

  @Output()
  public setDrawer = new EventEmitter(true);

  ngOnInit(): void {
    this.setDrawer.emit(this.drawerInst);
  } // ngOnInit.

}
