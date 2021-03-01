import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiTokenService} from '../shared/services/api-token.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
})
export class RedirectComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly apiTokenService: ApiTokenService
  ) { }

  ngOnInit(): void {
    console.log(this.apiTokenService.getRoleByApiToken());
    this.apiTokenService.getRoleByApiToken().subscribe(value => {
      console.log(value);
      if(!value){
        this.router.navigate(['/login']);
        return;
      } // if.

      switch (value.name){
        case 'admin':
          this.router.navigate(['/admin']);
          break;
        case 'employee':
          this.router.navigate(['/employee']);
      } // switch.
    }); // subscribe.
  } // ngOnInit.

}
