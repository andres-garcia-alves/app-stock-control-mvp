import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { BaseService } from './base.service';
import { IStock } from '../interfaces';

import data from '../../../db.json';

@Injectable({
  providedIn: 'root'
})
export class StockService extends BaseService {

  private stocks = [];
  private apiStock: string;

  constructor(private http: HttpClient) {
    super();
    this.apiStock = this.urlModuloStock + 'stock/';
    this.stocks = data.stock;
  }

  async getStocks(): Promise<IStock[]> {
    return Promise.resolve(this.stocks);
    // return this.http.get<IStock[]>(this.apiStock, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async postStock(stock: IStock): Promise<IStock> {
    stock.id = this.stocks.length > 0 ? Math.max(...this.stocks.map(s => s.id)) + 1 : 1;
    this.stocks.push(stock);
    return Promise.resolve(stock);
    // return this.http.post<IStock>(this.apiStock, stock, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async putStock(stock: IStock) {
    const index = this.stocks.findIndex(s => s.id === stock.id);
    if (index !== -1) {
      this.stocks[index] = stock;
    }
    return Promise.resolve(stock);
    // return this.http.put<IStock>(this.apiStock + stock.id, stock, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async deleteStock(id: number) {
    this.stocks = this.stocks.filter(s => s.id !== id);
    return Promise.resolve();
    // return this.http.delete(this.apiStock + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }
}
