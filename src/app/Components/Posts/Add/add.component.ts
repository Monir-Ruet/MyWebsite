import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddService } from './add.service';
@Component({
  selector: 'app-crud',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit ,OnDestroy{

  constructor(private Service:AddService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    if(this.addSubscriber!=null)
      this.addSubscriber.unsubscribe();
  }

  //Variables
  addSubscriber:any=null!;

  NewPostForm=new FormGroup({
    title:new FormControl<string>(''),
    body:new FormControl<string>(''),
    author:new FormControl<string>(''),
    tags:new FormControl<string>('')
  })
  t:string=null!;
  onaddnew(){
    let obj=this.NewPostForm.value;
    let newObj={
      "title":obj.title,
      "body":obj.body,
      "author":obj.author,
      "tags":[obj.tags]
    }
    this.addSubscriber=this.Service.addnewpost(newObj).subscribe((data)=>{
      console.log(data);
    })
  }
}