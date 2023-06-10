import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/client/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  constructor(private router: Router, private authService: AuthService) {}
  opened =
    'h-full relative bg-gradient-to-tr from-tradeX-blueBlack-500 hover:bg-gradient-to-br to-cyan-600 w-[15rem] text-white duration-200';
  openNav: boolean = true;

  toggleSideNav() {
    this.openNav = !this.openNav;
    if (!this.openNav) {
      this.opened =
        'h-full bg-gradient-to-tr from-tradeX-blueBlack-500 hover:bg-gradient-to-br to-cyan-600 w-20 text-white duration-200 ease-in relative';
    } else {
      this.opened =
        'h-full bg-gradient-to-tr from-tradeX-blueBlack-500 hover:bg-gradient-to-br to-cyan-600 w-[15rem] text-white duration-200 ease-in relative';
    }
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('user-profile');
    this.router.navigateByUrl('auth/login');
  }
}
