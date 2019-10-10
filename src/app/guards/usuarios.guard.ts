import { Injectable } from '@angular/core';
import {  CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Se implementa en el archivo de rutas principales en el app-routing.module
 * 
 */
export class UsuariosGuard implements CanLoad {

  constructor( private usuarioService: UsuarioService ){}
  
  canLoad():  Observable<boolean> | Promise<boolean> | boolean {
    return this.usuarioService.validaToken();
 }



  
}
