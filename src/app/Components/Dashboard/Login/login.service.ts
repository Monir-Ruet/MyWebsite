import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError,throwError } from 'rxjs';
import { UserService } from '../User/user.service';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private ws:HttpClient,private router:Router,private userService:UserService) { }

  Login(data:any){
    return this.ws.post<LoggedSuccess>(`${environment.apiUrl}/login`,data).subscribe(data=>{
      if(data.status==200){
        localStorage.setItem('token',data.token);
        this.userService.LoggedUser();
        this.router.navigate(['/']);
      }
    },err=>{
      console.log(err);
    })
  }
}

interface LoggedSuccess{
  status:number,
  token:string
}