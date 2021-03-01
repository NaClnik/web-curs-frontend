import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BASE_URL} from '../config';
import {environment} from '../../environments/environment';
import {AddBackendUrlInterceptorService} from './backend/add-backend-url-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiTokenService} from './services/api-token.service';
import {AddApiTokenHeaderInterceptorService} from './backend/add-api-token-header-interceptor.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';



@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddBackendUrlInterceptorService,
      multi: true
    },
  ] // providers.
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule>{
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: BASE_URL,
          useValue: environment.baseUrl
        }, // BASE_URL.
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AddApiTokenHeaderInterceptorService,
          multi: true
        },
        ApiTokenService
      ] // providers.
    }; // return.
  } // forRoot.
}
