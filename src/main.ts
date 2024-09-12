import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
// import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <h2>Observable</h2>
    <div>{{obserableobjData}}</div>
    <div class="divider" role="separator" aria-label="Divider"></div>
    <h2> Subject </h2>
    <div>{{subjectData}}</div>
  `,
})
export class App implements OnInit {
  name = 'Angular';
  obserableobj: any;
  obserableobjData: any;
  objectUnbscribe: any;
  subjectObj: any;
  subjectData: any;

  ngOnInit() {
    // Observable example 
    this.obserableobj = new Observable(this.AsyncSream);
    console.log('this.observable', this.obserableobj);
    this.objectUnbscribe = this.obserableobj.subscribe((res: any) =>
      this.Listner(res)
    );

    // Subject Example
    this.subjectObj = new Subject()
    this.subjectObj.subscribe((res:any) => {
    this.subjectData = res;
    console.log(res);  
    });

    this.subjectObj.next(Math.random());
    
  }

  Listner(res: any) {
    this.obserableobjData = res;
    console.log(res);
  }

  // For Observables
  AsyncSream(Observer: any) {
    var time = setInterval(() => {
      Observer.next(Math.random());
    }, 1000);
  }

  //Subject


  ngOnDestroy() {
    this.objectUnbscribe.unsubsribe();
  }
}

bootstrapApplication(App);
