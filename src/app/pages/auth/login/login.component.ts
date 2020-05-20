/*
 * @Date: 2020-05-20 16:02:41
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-20 17:14:52
 */
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { timer } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

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
      this.authService.redirectTo('/home');
    });
  }

}
