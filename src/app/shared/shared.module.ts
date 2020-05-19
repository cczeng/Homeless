/*
 * @Date: 2020-05-19 17:02:36
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-19 17:08:01
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AgGridCustomModule } from './modules/ag-grid-custom/ag-grid-custom.module';

const MODULES = [
  NgZorroAntdModule,
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
