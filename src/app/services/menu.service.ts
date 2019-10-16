import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentMenu } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private http: HttpClient ) { }


  getMenuOpts() {
    return this.http.get<ComponentMenu[]>('/assets/data/menu.json');
  }

  
  
}
