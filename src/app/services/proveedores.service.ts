import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { BaseService } from './base.service';
import { IProveedor } from '../interfaces';

import data from '../../../db.json';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService extends BaseService {

  private proveedores = [];
  private apiProveedores: string;

  constructor(private http: HttpClient) {
    super();
    this.apiProveedores = this.urlModuloStock + 'proveedores/';
    this.proveedores = data.proveedores;
  }

  async getProveedores(): Promise<IProveedor[]>  {
    return Promise.resolve(this.proveedores);
    // return this.http.get<IProveedor[]>(this.apiProveedores, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async getProveedor(id: number): Promise<IProveedor> {
    const proveedor = this.proveedores.find(p => p.id === id);
    return Promise.resolve(proveedor);
    // return this.http.get<IProveedor>(this.apiProveedores + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async postProveedor(proveedor: IProveedor): Promise<IProveedor> {
    proveedor.id = this.proveedores.length > 0 ? Math.max(...this.proveedores.map(p => p.id)) + 1 : 1;
    this.proveedores.push(proveedor);
    return Promise.resolve(proveedor);
    // return this.http.post<IProveedor>(this.apiProveedores, proveedor, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async putProveedor(proveedor: IProveedor) {
    const index = this.proveedores.findIndex(p => p.id === proveedor.id);
    if (index !== -1) {
      this.proveedores[index] = proveedor;
    }
    return Promise.resolve(proveedor);
    // return this.http.put<IProveedor>(this.apiProveedores + proveedor.id, proveedor, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async deleteProveedor(id: number) {
    this.proveedores = this.proveedores.filter(p => p.id !== id);
    return Promise.resolve();
    // return this.http.delete(this.apiProveedores + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }
}
