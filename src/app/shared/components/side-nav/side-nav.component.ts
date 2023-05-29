import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  opened =
    'h-full relative bg-tradeX-blueBlack-500 w-[15rem] text-white duration-200';
  openNav: boolean = true;

  toggleSideNav() {
    this.openNav = !this.openNav;
    if (!this.openNav) {
      this.opened =
        'h-full bg-tradeX-blueBlack-500 w-20 text-white duration-200 ease-in relative';
    } else {
      this.opened =
        'h-full bg-tradeX-blueBlack-500 w-[15rem] text-white duration-200 ease-in relative';
    }
  }
}
