import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../User/user.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy{

  constructor(private service:LoginService,private router:Router,private userService:UserService) { }

  Credential=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    remember:new FormControl(true)
  })

  isloggedIn=false;
  userSubscription:Subscription=null!;


  ngOnInit(): void {
    this.userService.UserBehaviorSubject.subscribe(data=>{
      this.isloggedIn=!!data;
      if(this.isloggedIn){
        this.router.navigate(['/']);
      }
    })
  }
  ngOnDestroy(): void {
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }
  onLogin(){
    this.service.Login(this.Credential.value);
  }
}
