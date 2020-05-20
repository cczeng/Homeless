/*
 * @Date: 2020-05-20 18:02:30
 * @LastEditors: cczeng
 * @LastEditTime: 2020-05-20 18:04:56
 */
/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppInterceptors } from './app.interceptors';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptors, multi: true },
];
