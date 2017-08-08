import { Component, OnInit } from '@angular/core';
import { ITask } from './task';


@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    // styleUrls: ['./name.component.css']
})
export class TaskListComponent implements OnInit {

    pageTitle: string = 'Task List';
    tasks: ITask[] = [
        {
            'taskId': 1,
            'language': 'Angular 2',
            'hours': 2,
            'taskDescription': 'Started creating this task scheduler',
            // 'date': "August 6, 2017 8:50:00"
        },
        {
            'taskId': 2,
            'language': 'Angular 2',
            'hours': 2,
            'taskDescription': 'Created another task.',
            // 'date': "August 6, 2017 8:50:00"
        }
    ];

    ngOnInit(): void {

    }
}
