import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderRequest } from '../../shared/interfaces/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  placeOrder(payload: orderRequest, payloadId: string) {
    return this.http.post(
      `http://localhost:8080/api/order/${payloadId}`,
      payload
    );
  }

  fetchOrders() {}

  cancelOrder() {}
}
