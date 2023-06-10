import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent implements OnInit {
  page: string = '';

  ngOnInit(): void {
    this.page = 'Exchanges';
  }
}
