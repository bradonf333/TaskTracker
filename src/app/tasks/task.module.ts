import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskCreateComponent } from './task-create.component';
import { TaskFilterPipe } from './task-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TaskService } from './task.service';

@NgModule({
    declarations: [
        TaskListComponent
        , TaskCreateComponent
        , TaskFilterPipe
    ],
    imports: [
        CommonModule
        , FormsModule
        , HttpModule
        , RouterModule.forChild([
            { path: 'tasks', component: TaskListComponent },
            { path: 'create', component: TaskCreateComponent }
        ])
    ],
    exports: [],
    providers: [ TaskService ],
})
export class TaskModule { }
