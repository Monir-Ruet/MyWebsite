import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';
import { KatexOptions } from 'ngx-markdown';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {


  body:string=null!;
  title:string=null!;
  author:string=null!;
  tags:string[]=null!;
  markdown:string=null!;
  constructor(private ws:ViewService) { }
  ngOnInit(): void {
    // this.ws.ViewPost('635a54afef23653478cf9a1f').subscribe(data=>{
    //   this.title=data.title;
    //   this.body+=data.body;
    //   this.author=data.author,
    //   this.tags=data.tags;
    // })
  }
  public options: KatexOptions = {
    displayMode: true,
    throwOnError: false,
    errorColor: '#cc0000',
  };
}

