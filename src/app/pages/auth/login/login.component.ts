/*
 * @Date: 2020-05-20 16:02:41
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-22 15:10:00
 */
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { timer } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  time = 3;

  timeout$ = timer(1000, 1000);

  constructor(
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router,
    private storage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.timeout$.pipe(
      takeWhile(() => this.time > 0),
      map(num => {
        return --this.time;
      })
    ).subscribe(res => {
      console.log(`倒计时${res}`);
      if (this.time === 0) {
        this.login();
      }
      this.cdr.detectChanges();
    });
  }

  login() {
    // 可以调用其他服务发起登录请求，但是记得修改 authService 的登录状态
    this.authService.login().subscribe(res => {
      this.storage.setItem('token', `ewogICJhbGciOiAiSFMyNTYiLAogICJ0eXAiOiAiSldUIgp9.ewoiYXV0aG9yIjoiY2N6ZW5nIiwKfQ.a111199977f195323f98ef432828f7b772dd76d395d50cd434720e559fe0ad18`);
      this.authService.redirectTo('/home');
    });
  }

}
