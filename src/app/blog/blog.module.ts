import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EntryListComponent } from './entry-list/entry-list.component';
import { PostComponent } from './post/post.component';
import { PrincipalRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [EntryListComponent, PostComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
})
export class BlogModule {}
