import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  customInterval=new Observable((subscriber)=>{
    let count=0;
    setInterval(() => {
      subscriber.next(count++);
      if(count==5){
        subscriber.complete();
      }
    }, 1000);
  }).pipe(
    map(data=>{
      return data+' AS'
    }),
    )
}
