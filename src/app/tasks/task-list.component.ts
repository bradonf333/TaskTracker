import { Component, OnInit } from '@angular/core';
import { ITask } from './task';


@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.css']
})
export class TaskListComponent implements OnInit {

    pageTitle: string = 'Programming Task List';
    imageWidth: number = 30;
    imageMargin: number = 0;
    imageUrl: string;
    tasks: ITask[] = [
        {
            'taskId': 0,
            'language': 'C#',
            'hours': 2,
            'taskDescription': 'Completed the Tribonacci sequence from CodeWars',
            'date': 'August 4, 2017 10:00 AM',
            // 'imageUrl': './app/images/AngularJS-Shield.png'
            'imageUrl': ''
        },
        {
            'taskId': 1,
            'language': 'Angular 2',
            'hours': 2,
            'taskDescription': 'Started creating this task scheduler',
            'date': 'August 6, 2017 8:50 PM',
            // 'imageUrl': './app/images/AngularJS-Shield.png'
            'imageUrl': ''
        },
        {
            'taskId': 2,
            'language': 'Angular 2',
            'hours': 2,
            'taskDescription': 'Created another task.',
            'date': 'August 6, 2017 8:50 PM',
            // 'imageUrl': './app/images/AngularJS-Shield.png'
            'imageUrl': ''
        },
        {
            'taskId': 3,
            'language': 'Angular 2',
            'hours': 2.5,
            'taskDescription': 'Got the main stuff working for the tasks',
            'date': 'August 7, 2017 8:41 PM',
            // 'imageUrl': './app/images/AngularJS-Shield.png'
            'imageUrl': ''
        }
    ];

    ngOnInit(): void {

        // For each task in the task list, call the setImage method
        this.tasks.forEach(element => {
            this.setImageUrl(element);
        });

    }

    /**
     * Sets the imageUrl of the given task based on the programming language
     * @param task 
     */
    setImageUrl(task: ITask): void {

        switch (task.language) {
            case 'Angular 2':
                task.imageUrl = './app/images/AngularJS-Shield.png';
                break;

            case 'C#':
                task.imageUrl = './app/images/C_Sharp.png';
                break;

            default:
                task.imageUrl = './app/images/questionIcon.png';
                break;
        }
    }
}
