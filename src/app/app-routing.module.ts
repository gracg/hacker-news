import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { StoryLpComponent } from './components/story-lp/story-lp.component';

const routes: Routes = [
  {path: "", component:LandingComponent},
  {path: "story/:id", component:StoryLpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
