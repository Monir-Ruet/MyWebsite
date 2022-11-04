import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//Components
import { ViewComponent } from './View/view.component';
import { AddComponent } from './Add/add.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardComponent } from './Dashboard/dashboard.component';

import { SecurityContext } from '@angular/core'; // For sanitization warning.

import 'prismjs';
import 'prismjs/components/prism-c.min.js';
import 'prismjs/components/prism-cpp.min.js';
import 'prismjs/components/prism-csharp.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-erlang.min.js';
import 'prismjs/components/prism-git.min.js';
import 'prismjs/components/prism-go.min.js';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-kotlin.min.js';
import 'prismjs/components/prism-makefile.min.js';
import 'prismjs/components/prism-mongodb.min.js';
// import 'prismjs/components/prism-php.min.js';
import 'prismjs/components/prism-python.min.js';
import 'prismjs/components/prism-r.min.js';
import 'prismjs/components/prism-ruby.min.js';
import 'prismjs/components/prism-sql.min.js';
import 'prismjs/components/prism-swift.min.js';
import 'prismjs/components/prism-vim.min.js';
import 'prismjs/components/prism-cmake.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-bash.min.js';


import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule,MarkedOptions } from 'ngx-markdown';
import { MarkdowneditorComponent } from './Markdowneditor/markdowneditor.component';

// import 'katex/dist/katex.min.js';
// import 'katex/dist/contrib/auto-render.min.js'

@NgModule({
  declarations: [
    ViewComponent,
    AddComponent,
    DashboardComponent,
    MarkdowneditorComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    MarkdownModule.forRoot({
      loader: HttpClient, // optional, only if you use [src] attribute
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
  ]
})
export class PostModule { }
