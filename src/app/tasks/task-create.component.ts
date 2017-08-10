import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'task-create.component.html'
    // styleUrls: ['task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

    pageTitle: string = 'Create a new Task';

    constructor(private _router: Router) { }

    ngOnInit() { }

    onBack(): void {
        this._router.navigate(['/tasks']);
    }
}
