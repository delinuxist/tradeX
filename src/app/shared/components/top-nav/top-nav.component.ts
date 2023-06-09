import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../../interfaces/user.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
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
