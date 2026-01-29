import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { BaseService } from './base.service';
import { ILocal } from '../interfaces';

import data from '../../../db.json';

@Injectable({
  providedIn: 'root'
})
export class LocalesService extends BaseService {

  private tiendas = [];
  private apiLocales: string;

  constructor(private http: HttpClient) {
    super();
    this.apiLocales = this.urlModuloStock + 'tiendas/';
    this.tiendas = data.tiendas;
  }

  async getLocales(): Promise<ILocal[]> {
    return Promise.resolve(this.tiendas);
    // return this.http.get<ILocal[]>(this.apiLocales, this.buildRequestOptions())
    //   .pipe<ILocal[]>(catchError(this.errorHandler)).toPromise();
  }

  async getLocal(id: number): Promise<ILocal> {
    const local = this.tiendas.find(t => t.id === id);
    return Promise.resolve(local);
    // return this.http.get<ILocal>(this.apiLocales + id, this.buildRequestOptions())
    //   .pipe<ILocal>(catchError(this.errorHandler)).toPromise();
  }

  async postLocal(local: ILocal): Promise<ILocal> {
    local.id = this.tiendas.length > 0 ? Math.max(...this.tiendas.map(t => t.id)) + 1 : 1;
    this.tiendas.push(local);
    return Promise.resolve(local);
    // return this.http.post<ILocal>(this.apiLocales, local, this.buildRequestOptions())
    //   .pipe<ILocal>(catchError(this.errorHandler)).toPromise();
  }

  async putLocal(local: ILocal) {
    const index = this.tiendas.findIndex(t => t.id === local.id);
    if (index !== -1) {
      this.tiendas[index] = local;
    }
    return Promise.resolve(local);
    // return this.http.put<ILocal>(this.apiLocales + local.id, local, this.buildRequestOptions())
    //   .pipe<ILocal>(catchError(this.errorHandler)).toPromise();
  }

  async deleteLocal(id: number) {
    this.tiendas = this.tiendas.filter(t => t.id !== id);
    return Promise.resolve();
    // return this.http.delete(this.apiLocales + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }
}
