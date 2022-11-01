import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{
  path: '',
  children: [ {path: '', component: EntryListComponent },
  { path: ':id', component: PostComponent, pathMatch: 'full' }, ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
