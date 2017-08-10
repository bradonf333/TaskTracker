import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './task';

/**
 * Custom pipe used to filter an array of Tasks by the Task Name
 */
@Pipe({
    name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

    transform(value: ITask[], filterBy: string): ITask[] {

        // Checks to see if the filterBy param is defined. If not then set to null
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        // Filters the tasks by the filterBy parameter string passed in
        return filterBy ? value.filter((task: ITask) =>
            task.language.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;

    }
}
