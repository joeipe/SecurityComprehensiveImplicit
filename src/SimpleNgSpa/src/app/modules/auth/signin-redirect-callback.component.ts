import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-redirect-callback',
  template: `<div></div>`,
})
export class SigninRedirectCallbackComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    this.authService.completeLogin().then(user => {
      this.router.navigate(['/'], { replaceUrl: true });
    })
  }

}
