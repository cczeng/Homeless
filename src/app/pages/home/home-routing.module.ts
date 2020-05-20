/*
 * @Date: 2020-05-19 17:22:55
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-20 17:03:32
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CanDeactivateGuard } from 'src/app/auth/can-deactivate.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
