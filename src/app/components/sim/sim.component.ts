import { Component, OnInit } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';


@Component({
  selector: 'app-sim',
  templateUrl: './sim.component.html',
  styleUrls: ['./sim.component.scss'],
})
export class SimComponent implements OnInit {

  constructor( private sim: Sim) { 

  }
  ngOnInit() {
    console.log('Leo sim');
    this.infoSim();
  }

 
  infoSim(){
    
    this.sim.getSimInfo().then(
        (info) => console.log('Sim info: ', info),
        (err) => console.log('Unable to get sim info: ', err)
      );
      
    this.sim.hasReadPermission().then(
        (info) => console.log('Has permission: ', info)
      );
      
    this.sim.requestReadPermission().then(
        () => console.log('Permission granted'),
        () => console.log('Permission denied')
      );

  }
  
}
