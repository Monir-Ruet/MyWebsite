import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private ws:HttpClient) { }
  signup(data:any){
    return this.ws.post<user>(`${environment.apiUrl}/signup`,data);
  }
}

export interface user{
  fullname?:string,
  username:string,
  password:string,
  email?:string,
  gender?:string
}