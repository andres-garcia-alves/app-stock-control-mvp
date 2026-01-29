import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { BaseService } from './base.service';
import { IVenta } from '../interfaces';

import data from '../../../db.json';

@Injectable({
  providedIn: 'root'
})
export class VentasService extends BaseService {

  private apiVentas: string;
  private ventas = [];

  constructor(private http: HttpClient) {
    super();
    this.apiVentas = this.urlModuloStock + 'ventas/';
    this.ventas = data.ventas;
  }

  async getVentas(): Promise<IVenta[]> {
    return Promise.resolve(this.ventas);
    // return this.http.get<IVenta[]>(this.apiVentas, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async getVenta(id: number): Promise<IVenta> {
    const venta = this.ventas.find(v => v.id === id);
    return Promise.resolve(venta);
    // return this.http.get<IVenta>(this.apiVentas + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async postVenta(venta: IVenta): Promise<IVenta> {
    venta.id = this.ventas.length > 0 ? Math.max(...this.ventas.map(v => v.id)) + 1 : 1;
    this.ventas.push(venta);
    return Promise.resolve(venta);
    // return this.http.post<IVenta>(this.apiVentas, venta, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async putVenta(id: number, venta: IVenta) {
    const index = this.ventas.findIndex(v => v.id === id);
    if (index !== -1) {
      this.ventas[index] = venta;
    }
    return Promise.resolve(venta);
    // return this.http.put<IVenta>(this.apiVentas + id, venta, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async deleteVenta(id: number) {
    this.ventas = this.ventas.filter(v => v.id !== id);
    return Promise.resolve();
    // return this.http.delete(this.apiVentas + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }
}
