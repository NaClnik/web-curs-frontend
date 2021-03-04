import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BASE_URL} from '../config';
import {environment} from '../../environments/environment';
import {AddBackendUrlInterceptorService} from './backend/add-backend-url-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiTokenService} from './services/api-token.service';
import {AddApiTokenHeaderInterceptorService} from './backend/add-api-token-header-interceptor.service';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {AdminGuard} from './auth/guards/admin.guard';



@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FlexModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddBackendUrlInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddApiTokenHeaderInterceptorService,
      multi: true
    },
  ] // providers.
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule>{
    return {
      ngModule: SharedModule,
      providers: [
        AdminGuard,
        {
          provide: BASE_URL,
          useValue: environment.baseUrl
        }, // BASE_URL.
        ApiTokenService
      ] // providers.
    }; // return.
  } // forRoot.
}
