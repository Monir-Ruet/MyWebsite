import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewService } from './view.service';
import { KatexOptions } from 'ngx-markdown';
import { ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit,OnDestroy {


  body:string=null!;
  title:string=null!;
  author:string=null!;
  tags:string[]=null!;
  markdown:string='';
  constructor(private ws:ViewService) { }

  //Destroy everything
  PostSubscriber:any;
  ngOnInit(): void {
    this.PostSubscriber=this.ws.ViewPost('636c5ca38975a50aa52e3f58').subscribe(data=>{
      this.title=data.title;
      this.markdown=data.body;
      this.author=data.author,
      this.tags=data.tags;
    })
  }
  ngOnDestroy(): void {
    this.PostSubscriber.unsubscriber();
  }
  public options: KatexOptions = {
    displayMode: true,
    throwOnError: false,
    errorColor: '#cc0000',
  };

  //Comment Editor
  ShowCommentEditor:boolean=false;
  


  //Markdown parser to table of contents
  f:boolean=false;
  tableOfContents='';
  generateLinkMarkup() {
    setTimeout(() => {
      this.ShowCommentEditor=true;
      let dom=document.getElementsByTagName('markdown')[0];
      const headings = [...dom.querySelectorAll('h1, h2, h3')];
      const parsedHeadings = headings.map(heading => {
        return <{title:string,depth:string,id:string}>{
          title: heading.innerHTML,
          depth: heading.nodeName.replace(/\D/g,''),
          id: heading.getAttribute('id')
        }
      })
      const htmlMarkup = parsedHeadings.map(h => `
        <li class="${h.depth > '1' ? 'pl-4' : ''}">
        <a href="#${h.id}">${h.title}</a>
        </li>
      `);
      const finalMarkup = `<ul>${htmlMarkup.join('')}</ul>`;
      this.tableOfContents=finalMarkup;
    }, 200);
  }
  onReady(){
    if(this.f) return;
    let dom=document.getElementsByTagName('markdown')[0];
    this.generateLinkMarkup();
    return this.f=true;
  }
}

