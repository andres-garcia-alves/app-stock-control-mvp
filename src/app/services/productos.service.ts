import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { BaseService } from './base.service';
import { IProducto } from '../interfaces';

import data from '../../../db.json';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends BaseService {

  private productos = [];
  private apiProductos: string;

  constructor(private http: HttpClient) {
    super();
    this.apiProductos = this.urlModuloStock + 'productos/';
    this.productos = data.productos;
  }

  async getProductos(): Promise<IProducto[]> {
    return Promise.resolve(this.productos);
    // return this.http.get<IProducto[]>(this.apiProductos, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async getProducto(id: number): Promise<IProducto> {
    const producto = this.productos.find(p => p.id === id);
    return Promise.resolve(producto);
    // return this.http.get<IProducto>(this.apiProductos + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async postProducto(producto: IProducto): Promise<IProducto> {
    producto.id = this.productos.length > 0 ? Math.max(...this.productos.map(p => p.id)) + 1 : 1;
    this.productos.push(producto);
    return Promise.resolve(producto);
    // return this.http.post<IProducto>(this.apiProductos, producto, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async putProducto(producto: IProducto) {
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productos[index] = producto;
    }
    return Promise.resolve(producto);
    // return this.http.put<IProducto>(this.apiProductos + producto.id, producto, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();;
  }

  async deleteProducto(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
    return Promise.resolve();
    // return this.http.delete(this.apiProductos + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();;
  }
}
