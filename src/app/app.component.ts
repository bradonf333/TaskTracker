import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>Hello {{name}}</h1>
    <task-list></task-list>
  <div>
  ` ,
})
export class AppComponent { name = 'Angular'; }
