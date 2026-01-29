import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { BaseService } from './base.service';
import { ITransferirStock } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StockTransferirService extends BaseService {

  private apiTransferirStock: string;

  constructor(private http: HttpClient) {
    super();
    this.apiTransferirStock = this.urlModuloStock + 'transferir-stock/';
  }

  async postTransferirStock(transferirStock: ITransferirStock) {
    return this.http.put<ITransferirStock>(this.apiTransferirStock, transferirStock, this.buildRequestOptions())
      .pipe(catchError(this.errorHandler)).toPromise();
  }
}
