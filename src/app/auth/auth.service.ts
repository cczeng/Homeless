/*
 * @Date: 2020-05-20 16:44:55
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-21 11:12:39
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  redirectUrl: string;

  token = '';


  constructor(
    private router: Router,
    private modal: NzModalService,
  ) {
    // 模拟获取是否登录
    const token = localStorage.getItem('token');
    if (token) {
      console.log('获取当前登录状态', token);
      this.isLoggedIn = true;
    }
  }


  /**
   * 调用此方法发起登录请求，登录成功后更新登录状态
   *
   * @returns {Observable<boolean>}
   * @memberof AuthService
   */
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = true;
      }),
    );
  }


  logout(): void {
    this.isLoggedIn = false;
    // 做一些清理动作
    localStorage.removeItem('token');
  }



  /**
   * 获取当前的 token
   *
   * @returns {string}
   * @memberof AuthService
   */
  getAuthorizationToken(): string {
    return this.token;
  }

  /**
   * 重定向路由，会先判断当前有没有登录之前的页面，如果有则跳转
   * 
   * @param {string} [url]
   * @returns
   * @memberof AuthService
   */
  redirectTo(url?: string) {
    console.log(`%c [重定向路由]`, 'background:red;color:white;');
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
      return true;
    }
    this.router.navigate([url]);
    return true;
  }



  /**
   * 弹出是否确定返回的提示框
   *
   * @returns {Observable<boolean>}
   * @memberof AuthService
   */
  canBackModal(): Observable<boolean> {
    let isOk = false;
    const modal = this.modal.confirm({
      nzTitle: '确定要离开此页面吗？',
      nzContent: '此页面的所有再改动的将会丢失.',
      nzOnOk: () => isOk = true,
    });
    return modal.afterClose.pipe(
      map(() => isOk),
    );
  }
}
