import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-top-nav',
  templateUrl: './admin-top-nav.component.html',
  styleUrls: ['./admin-top-nav.component.css'],
})
export class AdminTopNavComponent {
  constructor() {}
  username: string = '';
  ngOnInit() {
    let currentUser = localStorage.getItem('user-profile');
    if (currentUser != null) {
      this.username = JSON.parse(currentUser).username;
    }
  }
  @Input() page = '';
}
