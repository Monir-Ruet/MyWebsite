import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private ws:HttpClient) {}
  getGithub(){
    return this.ws.get('https://raw.githubusercontent.com/Monir-Ruet/HTTP-INJECTOR/main/C%2B%2B/settings.ini');
  }
}
