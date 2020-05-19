/*
 * @Date: 2020-05-19 17:19:50
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-19 17:27:22
 */ 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
