import { animate, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
const enterTransition = transition(':enter', [animate('5s ease-in')]);

const fadeIn = trigger('fadeIn', [enterTransition]);

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [fadeIn],
})
export class AuthComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData['animate'];
  }
}
