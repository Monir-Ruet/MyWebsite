import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KatexOptions } from 'ngx-markdown';
@Component({
  selector: 'app-markdowneditor',
  templateUrl: './markdowneditor.component.html',
  styleUrls: ['./markdowneditor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdowneditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  markdown:string='# MONIR';


  public options: KatexOptions = {
    displayMode: true,
    throwOnError: false,
    errorColor: '#cc0000',
  };


  // Textarea tab event handling
  handleKeydown(event:any) {
    if (event.key == 'Tab') {
        event.preventDefault();
        var start = event.target.selectionStart;
        var end = event.target.selectionEnd;
        event.target.value = event.target.value.substring(0, start) + '\t' + event.target.value.substring(end);
        event.target.selectionStart = event.target.selectionEnd = start + 1;
    }
  }

  // Preview
  showPreview:boolean=true;
  onPreview(){
    this.showPreview=!this.showPreview;
  }

  // Editor operations
  addText(shift:number,str1:string,str2:string=''){
    let textarea=document.getElementsByTagName('textarea')[0];
    let pos1=textarea.selectionStart,pos2=textarea.selectionEnd;
    let value=textarea.value;
    textarea.value=value.slice(0, pos1) + str1 + value.slice(pos1,pos2)+str2+value.slice(pos2);
    if(pos1!=pos2) shift=0;
    else{
      textarea.selectionStart=pos1+shift;
      textarea.selectionEnd=pos1+shift;
    }
    textarea.focus();
  }
  onBold(){
    this.addText(2,'**','**');
  }
  onItalic(){
    this.addText(1,'_','_');
  }
  onHead(n:number){
    let str:string ='\n';
    for(var i=0;i<n;i++) str+='#';
    str+=' ';
    this.addText(n+2,str);
  }
  onCode(){
    let str:string='\n```language\n\n```\n';
    this.addText(13,str);
  }
  onHightLight(){
    this.addText(6,'<mark>','</mark>');
  }
  onLink(){
    this.addText(2,'[Title](Address)');
  }
  onStrike(){
    this.addText(2,'~~','~~');
  }
  onUnderLine(){
    this.addText(2,'__','__');
  }
  onOrderList(){
    let str:string='\n1. Item\n2. Item\n';
    this.addText(4,str);
  }
  onUnOrderList(){
    let str:string='\n* Item\n* Item\n';
    this.addText(3,str);
  }
  onTable(){
    // let str='\n'+
    // '| Header 1 | Header 2 |\n'+
    // '|----------|----------|\n'+
    // '| Cell 1   | Cell 1   |\n'+
    // '| Cell 2   | Cell 2   |\n'
    let str=`
    <center>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky"><span class="data #textarea"></span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky"><span class="data"></span></td>
  </tr>
</tbody>
</table></center>`;
    this.markdown=str;
    this.addText(3,str);
  }
  onQuote(){
    let str='\n> \n';
    this.addText(3,str);
  }
  onInLineCode(){
    this.addText(1,'`','`');
  }
  oninLineMath(){
    this.addText(1,'$','$');
  }
  onMath(){
    this.addText(2,'$$','$$');
  }

}
