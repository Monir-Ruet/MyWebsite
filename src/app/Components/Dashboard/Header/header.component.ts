import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../User/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

  constructor(private userService:UserService) { }

  isauthenticated=false;
  userSubscription:Subscription=null!;
  username:string='';
  
  ngOnInit(): void {
    this.userSubscription=this.userService.UserBehaviorSubject.subscribe((data)=>{
      this.isauthenticated=!!data;
      if(data){
        this.username=data.username;
      }
    })
  }
  ngOnDestroy(): void {
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }
  onLogOut(){
    this.userService.UserBehaviorSubject.next(null);
    localStorage.removeItem('token');
    this.username='';
  }
}
