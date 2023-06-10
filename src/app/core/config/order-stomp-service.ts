import { RxStompService } from '../services/client/rx-stomp.service';
import { OrderStompConfig } from './order-stomp.config';

export function OrderStompServiceFactory() {
  const orderStomp = new RxStompService();
  orderStomp.configure(OrderStompConfig);
  orderStomp.activate();
  return orderStomp;
}
