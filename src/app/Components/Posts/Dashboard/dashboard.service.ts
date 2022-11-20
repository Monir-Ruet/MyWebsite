import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../post.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private ws:HttpClient) {}
  
  getPostall(QueryParams:string=''){
    if(QueryParams!='') QueryParams=`?${QueryParams}`;
    return this.ws.get<PostStore>(`${environment.apiUrl}/posts${QueryParams}`);
  }
}


export interface PostStore extends Post{
  like:number,
  dislike:number
}