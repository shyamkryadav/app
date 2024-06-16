


import { NgModule } from '@angular/core';
import * as ApiServiceProxies from './service-proxies';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ApiServiceProxies.ParentAccountServiceProxy,
  ],
})
export class ServiceProxyModule {}

