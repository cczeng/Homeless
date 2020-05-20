/*
 * @Date: 2020-05-20 15:39:48
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-20 17:02:47
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
            },
            { path: '', redirectTo: 'home', pathMatch: 'full', },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
