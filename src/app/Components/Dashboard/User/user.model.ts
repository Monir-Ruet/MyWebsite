export class user{
    private _username:string='';
    private _email:string='';
    private _fullname:string='';
    constructor(user:string,email:string,fullname:string){
        this._username=user,this._email=email,this._fullname=fullname;
    }
    get username(){
        return this._username;
    }
    get email(){
        return this._email;
    }
    get fullname(){
        return this._fullname;
    }
}