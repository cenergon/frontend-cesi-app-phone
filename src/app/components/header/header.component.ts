import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentsModule } from '../components.module';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string ="Creditos M22";
  @Input() icono: string ="home";


  componentes: Observable<ComponentsModule[]>;
  
  constructor() { }

  ngOnInit() {
  }

  notifications(){
    
  }


}
