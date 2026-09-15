import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'frontend-rutaexpress';
  private msalService = inject(MsalService);

  logout(): void {
    const activeAccount = this.msalService.instance.getActiveAccount() || this.msalService.instance.getAllAccounts()[0];
    
    // Limpiar almacenamiento local
    localStorage.clear();
    sessionStorage.clear();

    // Cierre de sesión en servidor Microsoft
    this.msalService.logoutRedirect({
      account: activeAccount,
      postLogoutRedirectUri: window.location.origin
    });
  }
}