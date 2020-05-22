/*
 * @Date: 2020-05-20 15:25:49
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-22 17:24:24
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';

import { DefaultComponent } from './default/default.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ZorroModule } from '../shared/modules/zorro/zorro.module';

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
    ZorroModule,
    LayoutRoutingModule,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class LayoutModule { }
