import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../../shared/interfaces/auth.model';
import { AuthService } from '../../../core/services/client/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  loading: boolean = false;

  register(payload: RegisterRequest) {
    this.loading = true;
    this.authService.register(payload).subscribe({
      next: (data) => {
        if (data != null) {
          this.toaster.success('Registered Successfully', 'Registration');
          this.router.navigate(['/auth/login']);
        }
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        if (err.error != null) {
          this.toaster.error('Invalid Credential', 'Registration Failed');
        }
        this.loading = false;
      },
    });
  }
}
