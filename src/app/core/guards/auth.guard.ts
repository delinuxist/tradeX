import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard = () => {
  const router = inject(Router);
  const userProfile = localStorage.getItem('user-profile');
  if (userProfile == null) {
    router.navigateByUrl('/auth/login');
    return false;
  }
  return true;
};
