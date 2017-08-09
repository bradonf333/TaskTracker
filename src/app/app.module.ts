import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskService } from './tasks/task.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, HttpModule ]
  , declarations: [AppComponent, TaskListComponent]
  , providers: [TaskService]
  , bootstrap: [AppComponent]
})
export class AppModule { }
