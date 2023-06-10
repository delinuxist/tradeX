import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css'],
})
export class TradesComponent implements OnInit {
  page: string = '';

  ngOnInit(): void {
    this.page = 'Trades';
  }
}
