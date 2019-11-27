import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth0.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {

  loading: boolean;

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit() {

    this.authservice.handleAuthCallback();

    this.loading = true;

    setTimeout( ()=>this.loading = false, 5000 )
  }

}
