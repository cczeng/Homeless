/*
 * @Date: 2020-05-20 15:25:49
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-20 15:57:50
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';

import { DefaultComponent } from './default/default.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const COMPONENTS = [
  DefaultComponent,
  SidemenuComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    LayoutRoutingModule,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class LayoutModule { }
