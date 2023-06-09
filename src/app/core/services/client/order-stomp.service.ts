import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';

@Injectable({
  providedIn: 'root',
})
export class OrderStompService extends RxStomp {
  constructor() {
    super();
  }
}
