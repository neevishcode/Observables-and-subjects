import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable } from 'rxjs';
// import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';
  obserableobj: any;
  objectUnbscribe: any;

  ngOnInit() {
    this.obserableobj = Observable.create(this.AsyncSream);
    console.log('this.observable', this.obserableobj);
    this.objectUnbscribe = this.obserableobj.subscribe((res: any) =>
      this.Listner(res)
    );
  }

  Listner(res: any) {
    console.log(res);
  }

  AsyncSream(Observer: any) {
    var time = setInterval(() => {
      Observer.next(Math.random());
    }, 1000);
  }

  ngOnDestroy() {
    this.objectUnbscribe.unsubsribe();
  }
}

bootstrapApplication(App);
