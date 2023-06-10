import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trading-history',
  templateUrl: './trading-history.component.html',
  styleUrls: ['./trading-history.component.css'],
})
export class TradingHistoryComponent implements OnInit {
  page = '';
  ngOnInit(): void {
    this.page = 'Trading-History';
  }
}
