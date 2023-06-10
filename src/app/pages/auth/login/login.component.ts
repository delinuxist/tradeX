import { Component } from '@angular/core';
import { LoginRequest } from '../../../shared/interfaces/auth.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserProfile } from '../../../shared/interfaces/user.model';
import { AuthService } from '../../../core/services/client/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  loading: boolean = false;

  login(payload: LoginRequest) {
    this.loading = true;
    this.authService.login(payload).subscribe({
      next: (data) => {
        if (data != null) {
          const userProfile: UserProfile = {
            username: data.user.username,
            role: data.user.authorities.flatMap((r) => r.authority),
            token: data.token,
          };
          this.authService.saveUserToLocalStorage(userProfile);
          if (userProfile.role.includes('USER')) {
            this.router.navigate(['/client/dashboard']);
          } else {
            this.router.navigate(['/admin/trades']);
          }
        }
        this.toaster.success('Logged In Successfully', 'Login');
        this.loading = false;
      },
      error: () => {
        this.toaster.error('Invalid Credentials', 'Login Failed');
        this.loading = false;
      },
    });
  }
}
