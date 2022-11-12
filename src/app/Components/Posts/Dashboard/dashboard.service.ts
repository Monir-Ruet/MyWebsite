import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private ws:HttpClient) {}
  
  getPostall(){
    let page=1;
    return this.ws.get(`${environment.apiUrl}/posts/find?page=${page}&sort=asc`);
  }
}
