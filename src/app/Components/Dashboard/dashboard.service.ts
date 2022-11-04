import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private ws:HttpClient) { }

  LoggedUser(){
    this.ws.get<LoggedUser>(`${environment.apiUrl}/user`).subscribe(data=>{
      return data;
    })
  }
}

interface LoggedUser{
  status:number,
  user:{
    username:string,
    fullname:string,
    email:string,
    gender:string
  }
}