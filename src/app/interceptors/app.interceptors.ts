/*
 * @Date: 2020-05-20 18:00:36
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-20 18:27:32
 */

import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';


@Injectable()
export class AppInterceptors implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router,
        private msg: NzMessageService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const started = Date.now();
        const authToken = this.authService.getAuthorizationToken();

        // 克隆原始请求,因为不允许我们直接修改原始请求
        const secureReq = req.clone({
            url: (environment.api + req.url).replace('http://', 'https://'),    // 拼接了基础 api 地址，以及转换了 http - https
            withCredentials: true,   // 当前请求为跨域类型时是否在请求中协带cookie
            setHeaders: { Authorization: authToken },   // 追加token
            // setHeaders: {
            //     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            // }
        });

        return next.handle(secureReq).pipe(
            tap(
                event => {
                    // response 为响应
                    if (event instanceof HttpResponse) {
                        // 在这里处理 code === error 的请求
                        if (event.body.code === 999) {
                            // 可以在这里打一个log，或者是强制跳转到登录页
                            console.log('登录身份已过期, 跳转到登录页面');
                            this.msg.error('登录身份已过期, 跳转到登录页面');
                            this.authService.redirectUrl = this.router.url;
                            this.router.navigate(['/login']);
                        }
                    }
                },
                error => {

                }
            ),
            finalize(() => {
                const elapsed = Date.now() - started;
                const msg = `${req.method} "${req.urlWithParams}" - ${elapsed} ms.`;
                console.log(msg);
            }),
        );
    }

}
