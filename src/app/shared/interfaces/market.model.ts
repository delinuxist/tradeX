export interface MarketData {
  timestamp: Date;
  id: string;
  BID_PRICE: number;
  SELL_LIMIT: number;
  ASK_PRICE: number;
  BUY_LIMIT: number;
  MAX_PRICE_SHIFT: number;
  LAST_TRADED_PRICE: number;
  TICKER: string;
}

export interface Plot {
  x: Date;
  y: number[];
}
