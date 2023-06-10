import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/client/auth.service';

@Component({
  selector: 'admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css'],
})
export class AdminSideNavComponent {
  constructor(private authService: AuthService, private router: Router) {}
  opened =
    'h-full relative bg-white  bg-gradient-to-tr to-gray-300 hover:bg-gradient-to-br from-tradeX-blueBlack-500  text-white  w-[15rem] ';
  openNav: boolean = true;

  toggleSideNav() {
    this.openNav = !this.openNav;
    if (!this.openNav) {
      this.opened =
        'h-full bg-white bg-gradient-to-tr to-gray-300 from-tradeX-blueBlack-500  text-white w-20 hover:bg-gradient-to-br  relative';
    } else {
      this.opened =
        'h-full bg-white bg-gradient-to-tr from-tradeX-blueBlack-500  text-white to-gray-300 w-[15rem] hover:bg-gradient-to-br relative';
    }
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('user-profile');
    this.router.navigateByUrl('auth/login');
  }
}
