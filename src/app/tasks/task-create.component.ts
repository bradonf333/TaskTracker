import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from './task.service';

@Component({
    moduleId: module.id,
    templateUrl: 'task-create.component.html'
    // styleUrls: ['task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

    languages: string[];
    errorMessage: string;

    pageTitle: string = 'Create a new Task';

    constructor(
        private _router: Router,
        private _taskService: TaskService
    ) { }

    ngOnInit() {
        /** Calls the service to return a list of products */
        this._taskService.getLanguages()
            .subscribe(languages => {
                this.languages = languages;
                // this.tasks.forEach(element => {
                //     this.setImageUrl(element);
                // });
            },
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/tasks']);
    }
}
