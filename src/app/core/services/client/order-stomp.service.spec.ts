import { TestBed } from '@angular/core/testing';

import { OrderStompService } from './order-stomp.service';

describe('OrderStompService', () => {
  let service: OrderStompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderStompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
