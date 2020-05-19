/*
 * @Date: 2020-05-19 17:22:55
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-19 17:25:41
 */ 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
