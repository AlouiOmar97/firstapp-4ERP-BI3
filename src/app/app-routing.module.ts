import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { HomeComponent } from './home/home.component';
import { AddSuggestionComponent } from './core/add-suggestion/add-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsSuggestionComponent } from './core/details-suggestion/details-suggestion.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'suggestion/list', component: ListSuggestionComponent },
  { path:'suggestion/add', component: AddSuggestionComponent },
  { path:'suggestion/details/:id' , component: DetailsSuggestionComponent},
  { path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
