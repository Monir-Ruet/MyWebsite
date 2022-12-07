import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { user } from "./user.model";

@Injectable({
    providedIn:'root'
})

export class UserService{
    constructor(private ws:HttpClient){}

    UserBehaviorSubject=new BehaviorSubject<user | null>(null);

    private getLoggedUser(){
        return this.ws.get<LoggedUser>(`${environment.apiUrl}/user`).pipe(tap(data=>{
            const newUser=new user(data.user.username,data.user.email,data.user.fullname);
            this.UserBehaviorSubject.next(newUser);
        }))
    }

    LoggedUser(){
        this.getLoggedUser().subscribe();
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