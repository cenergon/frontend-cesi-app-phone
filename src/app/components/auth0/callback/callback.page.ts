import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth0.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {

  loading: boolean;

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }


  ngOnInit() {

    this.authService.handleAuthCallback();

    this.loading = true;

    setTimeout( ()=>this.loading = false, 5000 );

   
  }

}
