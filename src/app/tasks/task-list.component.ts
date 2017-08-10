import { Component, OnInit } from '@angular/core';
import { ITask } from './task';
import { TaskService } from './task.service';


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
    errorMessage: string;
    tasks: ITask[];

    constructor(private _taskService: TaskService) {
    }

    ngOnInit(): void {

        /** Calls the service to return a list of products */
        this._taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
                this.tasks.forEach(element => {
                    this.setImageUrl(element);
                });
            },
            error => this.errorMessage = <any>error);

        // For each task in the task list, call the setImage method
        // this.tasks.forEach(element => {
        //     this.setImageUrl(element);
        // });

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

            case 'JavaScript':
                task.imageUrl = './app/images/javascript.png'
                break;

            default:
                task.imageUrl = './app/images/questionIcon.png';
                break;
        }
    }
}
