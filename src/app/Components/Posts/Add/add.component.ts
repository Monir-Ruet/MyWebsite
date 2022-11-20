import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddService } from './add.service';
@Component({
  selector: 'app-crud',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  constructor(private Service:AddService) { }

  ngOnInit(): void {
  }
  //Variables

  NewPostForm=new FormGroup({
    title:new FormControl(''),
    body:new FormControl(''),
    author:new FormControl(''),
    tags:new FormControl('')
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
    this.Service.addnewpost(newObj).subscribe((data)=>{
      console.log(data);
    })
  }
}