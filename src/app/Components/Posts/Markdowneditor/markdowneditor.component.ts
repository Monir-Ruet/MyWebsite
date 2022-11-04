import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ngx-markdown';
@Component({
  selector: 'app-markdowneditor',
  templateUrl: './markdowneditor.component.html',
  styleUrls: ['./markdowneditor.component.scss']
})
export class MarkdowneditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  markdown:string=null!;


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
}
