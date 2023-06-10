import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoginRequest,
  RegisterRequest,
} from '../../../shared/interfaces/auth.model';
import { UserData, UserProfile } from '../../../shared/interfaces/user.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(payload: LoginRequest) {
    return this.http.post<UserData>(
      environment.baseUrl + '/auth/login',
      payload
    );
  }

  register(payload: RegisterRequest) {
    return this.http.post(environment.baseUrl + '/auth/register', payload);
  }

  logout() {
    this.http.get(environment.baseUrl + '/auth/logout').subscribe({
      next: (data) => console.log(data),
    });
  }

  saveUserToLocalStorage(userProfile: UserProfile) {
    localStorage.setItem('user-profile', JSON.stringify(userProfile));
  }
}
