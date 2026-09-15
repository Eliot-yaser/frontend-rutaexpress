import { Component, OnInit, inject } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {
  userEmail: string = 'el.armijo@duocuc.cl';
  userRoles: string[] = ['Usuario Estándar'];

  private authService = inject(MsalService);

  ngOnInit(): void {
    const instance = this.authService.instance;
    let account = instance.getActiveAccount();

    if (!account && instance.getAllAccounts().length > 0) {
      account = instance.getAllAccounts()[0];
      instance.setActiveAccount(account);
    }

    if (account) {
      this.userEmail = account.username || 'el.armijo@duocuc.cl';
      const claims = account.idTokenClaims as any;
      if (claims?.roles?.length) {
        this.userRoles = claims.roles;
      }
    }
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.authService.logoutRedirect({
      postLogoutRedirectUri: window.location.origin
    });
  }
}