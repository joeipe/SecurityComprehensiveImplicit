import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private authService: AuthService
  ) {
    this.authService.loginChanged.subscribe(loggeIn => {
      this.isLoggedIn = loggeIn;
    })
   }

  ngOnInit(): void {
    this.authService.isLoggedIn().then(loggeIn => {
      this.isLoggedIn = loggeIn;
    })
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
