import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../../../shared/interfaces/user.model';

export class InterceptorService implements HttpInterceptor {
  currentUser = localStorage.getItem('user-profile');
  token: string = '';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Request is on its way');
    if (this.currentUser != null) {
      this.token = JSON.parse(this.currentUser).token;
    }
    const modifiedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    console.log(modifiedRequest);
    return next.handle(modifiedRequest);
  }
}
