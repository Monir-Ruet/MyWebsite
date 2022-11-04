import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor(private service:LoginService,private router:Router,private DashService:DashboardService) { }

  Credential=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    remember:new FormControl(true)
  })

  loginSubscriber:any=null!;
  ngOnInit(): void {
    // console.log(this.DashService.LoggedUser());
  }
  ngOnDestroy(): void {
    // if(this.loginSubscriber!=null)
    //   this.loginSubscriber.unsubscribe();
  }
  onLogin(){
    this.loginSubscriber=this.service.Login(this.Credential.value).subscribe((data)=>{
      if(data.status==200){
        console.log(data)
        localStorage.setItem('token',data.token);
        this.router.navigate(['/']);
      }
      this.loginSubscriber.unsubscribe();
    })
  }
  isValidLogin(){

  }
}
