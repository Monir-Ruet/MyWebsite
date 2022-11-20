import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { SignupService } from './signup.service';
@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SingupComponent implements OnInit {

  constructor(private service:SignupService) { }
  SignupSubscriber:any=null!;
  ngOnInit(): void {
  }
  NewUser=new FormGroup({
    fullname:new FormControl(''),
    username:new FormControl(''),
    password:new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl('')
  })
  onSignup(){
    this.SignupSubscriber=this.service.signup(this.NewUser.value).subscribe((data)=>{
      console.log(data);
    })
  }
}
