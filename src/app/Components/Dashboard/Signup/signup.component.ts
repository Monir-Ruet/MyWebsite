import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { SignupService } from './signup.service';
@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SingupComponent implements OnInit,OnDestroy {

  constructor(private service:SignupService) { }
  SignupSubscriber:any=null!;
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    if(this.SignupSubscriber!=null)
      this.SignupSubscriber.unsubscribe();
  }
  NewUser=new FormGroup({
    fullname:new FormControl(''),
    username:new FormControl(''),
    password:new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl('')
  })
  onSignup(){
    console.log(this.NewUser.value)
    this.SignupSubscriber=this.service.signup(this.NewUser.value).subscribe((data)=>{
      console.log(data);
    })
  }
}
