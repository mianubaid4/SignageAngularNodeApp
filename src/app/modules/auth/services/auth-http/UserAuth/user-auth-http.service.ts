import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel } from '../../../models/user.model';
import { AuthModel } from '../../../models/auth.model';
import { environment } from '../../../../../../environments/environment';

const USER_LOGIN_URL = `${environment.baseUrl}/login`;
const USER_Register_URL = `${environment.baseUrl}/signup`;


@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient) { }

  // public methods
  login(email: string, password: string): Observable<any> {
    const notFoundError = new Error('Not Found');
    if (!email || !password) {
      return of(notFoundError);
    }

    return this.getUserInfo(email, password).pipe(
      
      map((result: any) => {
        if (result.length <= 0) {
          return notFoundError;
        }
debugger
        const auth = new AuthModel();
        auth.authToken = result.token;
        auth.refreshToken = result.userId;
        auth.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
        return auth;
      })
    );
  }

  createUser(user: any): Observable<any> {
    // user.roles = [2]; // Manager
    user.authToken = 'auth-token-' + Math.random();
    user.refreshToken = 'auth-token-' + Math.random();
    user.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
    // user.pic = './assets/media/avatars/150-2.jpg';

    return this.http.post<UserModel>(USER_Register_URL, user);
  }

  forgotPassword(email: string): Observable<boolean> {
    return this.getAllUsers().pipe(
      map((result: UserModel[]) => {
        const user = result.find(
          (u) => u.email.toLowerCase() === email.toLowerCase()
        );
        return user !== undefined;
      })
    );
  }

  getUserByToken(token: any): Observable<UserModel | undefined> {
    //  UsersTable.users.find((u: UserModel) => {
    //   return u.authToken === token;
    // });
    const user=token;
    if (!user) {
      return of(undefined);
    }

    return of(token);
  }

  getUserInfo(email: string, password: string): Observable<UserModel[]> {
    //  return this.http.get<UserModel[]>(API_USERS_URL);
    const loginData = { email: email, password: password }
    return this.http.post<any[]>(USER_LOGIN_URL, loginData)
  }
  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(USER_LOGIN_URL);
  }
}
