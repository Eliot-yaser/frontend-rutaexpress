import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: MsalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.handleRedirectObservable().subscribe({
      next: (result) => {
        if (result || this.authService.instance.getAllAccounts().length > 0) {
          if (result) {
            this.authService.instance.setActiveAccount(result.account);
          }
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => console.error('Error procesando el login:', err)
    });
  }

  login(): void {
    this.authService.loginRedirect();
  }
}