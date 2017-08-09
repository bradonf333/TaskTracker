import { Injectable } from '@angular/core';
import { ITask } from './task';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskName {

    // Represents a web api url that would have access to the list of tasks
    private _taskUrl = './api/tasks/tasks.json';

    /**
     * Constructor to inject the Http Service from Angular
     */
    constructor(private _http: Http) {
    }

    /** 
     * Returns a list of ITask by sending an http request to the 
     * given url and casting the json response into an ITask[]
     */
    getProducts(): Observable<ITask[]> {
        return this._http.get(this._taskUrl)
            .map((response: Response) => <ITask[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    /**
     * Takes an error, logs it to the console and throws it to the calling code.
     * @param error 
     */
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
