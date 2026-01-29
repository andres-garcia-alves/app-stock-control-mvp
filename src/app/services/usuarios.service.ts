import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { BaseService } from './base.service';
import { IUsuario } from '../interfaces';

import data from '../../../db.json';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService {

  private usuarios = [];
  private apiUsuarios: string;

  constructor(private http: HttpClient) {
    super();
    this.apiUsuarios = this.urlModuloUsers + 'users/';
    this.usuarios = data.users;
  }

  async getUsuarios(): Promise<IUsuario[]> {
    return Promise.resolve(this.usuarios);
    // return this.http.get<IUsuario[]>(this.apiUsuarios, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async getUsuario(id: number): Promise<IUsuario> {
    const usuario = this.usuarios.find(u => u.id === id);
    return Promise.resolve(usuario);
    // return this.http.get<IUsuario>(this.apiUsuarios + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async postUsuario(usuario: IUsuario): Promise<IUsuario> {
    usuario.id = this.usuarios.length > 0 ? Math.max(...this.usuarios.map(u => u.id)) + 1 : 1;
    this.usuarios.push(usuario);
    return Promise.resolve(usuario);
    // return this.http.post<IUsuario>(this.apiUsuarios, usuario, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async putUsuario(usuario: IUsuario) {
    const index = this.usuarios.findIndex(u => u.id === usuario.id);
    if (index !== -1) {
      this.usuarios[index] = usuario;
    }
    return Promise.resolve(usuario);
    // return this.http.put<IUsuario>(this.apiUsuarios + usuario.id, usuario, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }

  async deleteUsuario(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
    return Promise.resolve();
    // return this.http.delete(this.apiUsuarios + id, this.buildRequestOptions())
    //   .pipe(catchError(this.errorHandler)).toPromise();
  }
}
