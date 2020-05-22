/*
 * @Date: 2020-05-19 11:33:41
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-22 16:57:31
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';

import zh from '@angular/common/locales/zh';
import { LoginComponent } from './pages/auth/login/login.component';
import { NotfoundComponent } from './pages/auth/notfound/notfound.component';
import { httpInterceptorProviders } from './interceptors';

registerLocaleData(zh);

//  下面是APP 初始化时候执行一系列动作的办法
import { StartupService } from './startup/startup.service';
import { ZorroModule } from './shared/modules/zorro/zorro.module';
export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.AppInit();
}
const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  }
];


const COMPONENTS = [
  LoginComponent,
  NotfoundComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZorroModule,
    AppRoutingModule,
  ],
  providers: [
    httpInterceptorProviders,
    ...APPINIT_PROVIDES,
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
