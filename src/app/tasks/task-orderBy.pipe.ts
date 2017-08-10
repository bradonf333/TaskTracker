import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform {

    transform(array: Array<string>, args: string): Array<string> {

        // Make sure array is not null
        if (!array || array === undefined || array.length === 0) {
            return null;
        } else {
 
            array.sort((a: any, b: any) => {
                if ( a.date < b.date ) {
                    return -1;
                } else if ( a.date > b.date ) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return array;
        }
    }
}
