/*
 * @Date: 2020-05-20 16:55:55
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-21 11:14:06
 */
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(
    private authService: AuthService,
  ) { }

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('%c [canDeactivate] 拦截离开', 'color: red;', component);
    if (!this.authService.isLoggedIn) { return true; }
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
