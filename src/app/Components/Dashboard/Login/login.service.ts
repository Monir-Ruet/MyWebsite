import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private ws:HttpClient) { }
  Login(data:any){
    return this.ws.post<LoggedSuccess>(`${environment.apiUrl}/login`,data);
  }
}

interface LoggedSuccess{
  status:number,
  token:string
}