import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { rxStompServiceFactory } from './core/config/rx-stomp-service-factory';
import { ClientModule } from './pages/client/client.module';
import { AuthModule } from './pages/auth/auth.module';
import { HomeComponent } from './pages/home/home.component';
import { AdminModule } from './pages/admin/admin.module';
import { InterceptorService } from './core/services/client/interceptor.service';
import { RxStompService } from './core/services/client/rx-stomp.service';
import { OrderStompService } from './core/services/client/order-stomp.service';
import { OrderStompServiceFactory } from './core/config/order-stomp-service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ClientModule,
    SharedModule,
    HttpClientModule,
    AuthModule,
    AdminModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
    },
    {
      provide: OrderStompService,
      useFactory: OrderStompServiceFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
