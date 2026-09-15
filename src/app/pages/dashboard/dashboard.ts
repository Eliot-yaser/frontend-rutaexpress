import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {
  userEmail: string = '';
  userRoles: string[] = [];

  constructor(private authService: MsalService) {}

  ngOnInit(): void {
    const accounts = this.authService.instance.getAllAccounts();
    if (accounts.length > 0) {
      const account = accounts[0];
      this.userEmail = account.username;
      
      const claims = account.idTokenClaims as any;
      if (claims && claims.roles) {
        this.userRoles = claims.roles;
      } else {
        this.userRoles = ['Usuario Estándar'];
      }
    }
  }

  logout(): void {
    this.authService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200/login'
    });
  }
}