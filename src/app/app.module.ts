import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskService } from './tasks/task.service';
import { HttpModule } from '@angular/http';
import { TaskFilterPipe } from './tasks/task-filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'tasks', component: TaskListComponent},
      { path: '', redirectTo: 'tasks', pathMatch: 'full'},
      { path: '**', redirectTo: 'tasks', pathMatch: 'full'}
    ])
  ]
  , declarations: [AppComponent, TaskListComponent, TaskFilterPipe]
  , providers: [TaskService]
  , bootstrap: [AppComponent]
})
export class AppModule { }
