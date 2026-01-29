import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { BaseService } from './base.service';
import { IBajaStock } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StockBajaService extends BaseService {

  private plainStock = [];
  private apiBajaStock: string;

  constructor(private http: HttpClient) {
    super();
    this.apiBajaStock = this.urlModuloStock + 'baja-stock/';
  }

  async postBajaStock(bajaStock: IBajaStock): Promise<IBajaStock> {
    return this.http.put<IBajaStock>(this.apiBajaStock, bajaStock, this.buildRequestOptions())
      .pipe(catchError(this.errorHandler)).toPromise();
  }
}
