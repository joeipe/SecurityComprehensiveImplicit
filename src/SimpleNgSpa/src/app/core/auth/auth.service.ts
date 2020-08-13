import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userManager: UserManager;
  private _user: User;
  private _loginChangedSubject = new Subject<boolean>();

  loginChanged = this._loginChangedSubject.asObservable();

  constructor() {
    const stsSettings = {
      authority: 'https://localhost:5001/',
      client_id: 'simplespaclient',
      response_type: 'code',
      // ?UsePkce: ,
      scope: 'openid profile address roles simpleaapi',
      redirect_uri: `http://localhost:4200/signin-callback`,
      post_logout_redirect_uri: `http://localhost:4200/signout-callback`,

      // refresh token(similar) related
      automaticSilentRenew: true,
      silent_redirect_uri: `http://localhost:4200/assets/silent-callback.html`
    }
    this._userManager = new UserManager(stsSettings);
    this._userManager.events.addAccessTokenExpired(_ => {
      this._loginChangedSubject.next(false);
    });
  }

  login() {
    return this._userManager.signinRedirect();
  }

  isLoggedIn(): Promise<boolean> {
    return this._userManager.getUser().then(user => {
      const userCurrent = !!user && !user.expired;
      if (this._user !== user) {
        this._loginChangedSubject.next(userCurrent);
      }
      /*
      if (userCurrent && !this.authContext) {
        this.loadSecurityContext();
      }*/
      this._user = user;
      return userCurrent;
    });
  }

  completeLogin() {
    return this._userManager.signinRedirectCallback().then(user => {
      this._user = user;
      this._loginChangedSubject.next(!!user && !user.expired);
      return user;
    });
  }

  logout() {
    return this._userManager.signoutRedirect();
  }

  completeLogout() {
    this._user = null;
    this._loginChangedSubject.next(false);
    return this._userManager.signoutRedirectCallback();
  }

  getAccessToken() {
    return this._userManager.getUser().then(user => {
      if (!!user && !user.expired) {
        return user.access_token;
      }
      else {
        return null;
      }
    });
  }
}
