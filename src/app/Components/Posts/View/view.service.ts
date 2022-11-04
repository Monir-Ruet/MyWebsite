import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../post.interface';
@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private ws:HttpClient) { }
  ViewPost(id:string){
    return this.ws.post<Post>(`${environment.apiUrl}/posts/view`,{"_id":id});
  }
}
