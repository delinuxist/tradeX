import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Request is on its way');
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', ['hello', 'how']),
    });
    console.log(modifiedRequest);
    return next.handle(modifiedRequest);
  }
}
