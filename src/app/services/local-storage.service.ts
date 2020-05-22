/*
 * @Date: 2020-05-22 15:01:27
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-22 15:09:31
 */ 
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private msg: NzMessageService,
  ) { }



  /**
   * 写入一项
   *
   * @param {string} key
   * @param {*} value
   * @memberof LocalStorageService
   */
  setItem(key: string, value) {
    if (!key || !value) { return; }
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
    this.msg.success(`${key} - ${value}`);
  }

  getItem(key: string) {
    if (!key) { return; }
    const value = JSON.parse(localStorage.getItem(key) || '');
    console.log(`get localStorage ${key} - ${value}`);
    return value;
  }
}
