/*
 * @Date: 2020-05-19 17:02:22
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-19 17:04:43
 */ 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AgGridModule } from 'ag-grid-angular';

const COMPONENTS = [
];

const ENTRY_COMPONENTS = [
];

// 存放 headerComponentFramework
const AG_GRID_COMPONENTS = [
];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    AgGridModule.withComponents(AG_GRID_COMPONENTS)
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  exports: [
    AgGridModule,
    ...COMPONENTS,
  ],
})
export class AgGridCustomModule { }
