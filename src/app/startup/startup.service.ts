/*
 * @Date: 2020-05-21 09:42:48
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-21 09:51:08
 */ 
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor() { }



  /**
   * APP 启动的时候会来调用这个方法，只有这个方法返回一个 promise之后才会启动app
   *
   * @returns {Promise<any>}
   * @memberof StartupService
   */
  AppInit(): Promise<any> {

    console.log('%c [APP INIT]初始化已启动', 'background: #000; color: red;');

    return of(true).toPromise();
  }

}
