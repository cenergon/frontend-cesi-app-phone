import { Injectable } from '@angular/core';
import {  CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import { AuthService } from '../services/auth0.service';
import { tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

/**
 * Se implementa en el archivo de rutas principales en el app-routing.module
 * 
 */
export class UsuariosGuard implements CanLoad {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error("Method not implemented.");
  }


  constructor( 
    private usuarioService: UsuarioService,
    private authService : AuthService
    ){}
  
  canLoad():  Observable<boolean> | Promise<boolean> | boolean {
    //return this.usuarioService.validaToken();
    if (this.usuarioService.validaToken()){
      return true;
    }else
    if (this.authService.isAuthenticated$){
      console.log("entro");
      return true;
    }
    else {
      return false;    
    }
 
    //Me retorna cuando no esto logueado al login de aUTH0
    // return this.authService.isAuthenticated$.pipe(
    //   tap(loggedIn => {
    //     if (!loggedIn) {
    //       this.authService.login();
    //     }
    //   })
    // );

 }



  
}
