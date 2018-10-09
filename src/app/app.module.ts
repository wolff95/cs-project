import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { CsHeaderComponent } from './cs-header/cs-header.component';
import { CsPostComponent } from './cs-post/cs-post.component';
import { CsPostListComponent } from './cs-post-list/cs-post-list.component';
import { PostService } from "./_services/post.service";
import { CsPostDetailsComponent } from './cs-post-details/cs-post-details.component';

import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CsHeaderComponent,
    CsPostComponent,
    CsPostListComponent,
    CsPostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PostsRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
