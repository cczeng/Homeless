/*
 * @Date: 2020-05-19 17:02:36
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-22 16:56:59
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridCustomModule } from './modules/ag-grid-custom/ag-grid-custom.module';
import { ZorroModule } from './modules/zorro/zorro.module';

const MODULES = [
  ZorroModule,
  AgGridCustomModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ]
})
export class SharedModule { }
