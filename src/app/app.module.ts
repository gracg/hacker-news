import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LpTopbarComponent } from './components/lp-topbar/lp-topbar.component';
import { StoryItemComponent } from './components/story-item/story-item.component';
import { StoryLpComponent } from './components/story-lp/story-lp.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LpTopbarComponent,
    StoryItemComponent,
    StoryLpComponent,
    CommentItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
