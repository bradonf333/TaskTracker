import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TaskModule } from './tasks/task.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: '**', redirectTo: 'tasks', pathMatch: 'full' }
    ])
    , TaskModule
  ]
  , declarations: [AppComponent]
  , bootstrap: [AppComponent]
})
export class AppModule { }
