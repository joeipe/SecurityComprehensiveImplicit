import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return from(this.authService.getAccessToken().then(token => {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const authReq = request.clone({ headers })
      // return next.handle(authReq).toPromise();
      return next.handle(authReq).pipe(tap(_ => { }, error => {
        var respError = error as HttpErrorResponse;
        if (respError && (respError.status === 401 || respError.status === 403)) {
          this.router.navigate(['/unauthorized']);
        }
      })).toPromise();
    }));
  }
}
