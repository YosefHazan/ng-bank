import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-bank';
  constructor(private router:Router){} //step 10
  
  //step 11
  isLoginPage():boolean{
    return this.router.url == '/login';
  }
}

