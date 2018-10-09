import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CsPostListComponent }    from './cs-post-list/cs-post-list.component';
import { CsPostDetailsComponent }  from './cs-post-details/cs-post-details.component';

const postsRoutes: Routes = [
  { path: 'posts',  component: CsPostListComponent },
  { path: 'post/:id', component: CsPostDetailsComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(postsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/