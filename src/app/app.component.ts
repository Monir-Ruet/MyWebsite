import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './Components/Dashboard/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  constructor(private userServ:UserService,private router:Router){
    this.userServ.LoggedUser();
  }
  blockRoute(){
    return this.router.url=='/login' || this.router.url=='/signup'
  }
}
