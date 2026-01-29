import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { BaseService } from './base.service';
import { ILogin } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  private apiLogin: string;

  constructor(private http: HttpClient) {
    super();
    this.apiLogin = this.urlModuloLogin;
  }

  async postLogin(login: ILogin) {

    // simulando un backend
    if (login.username !== 'admin' || login.password !== '1234') { return null; }
    return { token: "ba897b501056c54bd59ee829ab28a7bc6ff81abc" };

    // return this.http.post<any>(this.apiLogin, login)
    //  .pipe(catchError(this.errorHandler)).toPromise();
  }

  async putLogin(login: ILogin) {
    return this.http.put<any>(this.apiLogin, login, this.buildRequestOptions())
      .pipe(catchError(this.errorHandler)).toPromise();
  }
}
