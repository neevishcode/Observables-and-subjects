import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
// import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <h2>Observable</h2>
    <div>Observable subs 1: {{obserableobjData1}}</div>
    <div>Observable subs 2: {{obserableobjData2}}</div>
    <div>Observable subs 3: {{obserableobjData3}}</div>
    <div class="divider" role="separator" aria-label="Divider"></div>
    <h2> Subject </h2>
    <div>Subject subs 1: {{subjectData1}}</div>
    <div>Subject subs 2: {{subjectData1}}</div>
    <div>Subject subs 3: {{subjectData1}}</div>
  `,
})
export class App implements OnInit {
  name = "Angular's Observables and Subjects";
  obserableobj: any;
  obserableobjData1: any;
  obserableobjData2: any;
  obserableobjData3: any;
  objectUnbscribe: any;
  subjectObj: any;
  subjectData1: any;
  subjectData2: any;
  subjectData3: any;

  ngOnInit() {
    // Observable example 
    this.obserableobj = new Observable(this.AsyncSream);
    console.log('this.observable', this.obserableobj);
    this.obserableobj.subscribe((res: any) =>
      this.Listner(res)
    );
    this.obserableobj.subscribe((res: any) =>
      this.obserableobjData2 = res
    );
    this.obserableobj.subscribe((res: any) =>
      this.obserableobjData3 = res
    );

    // Subject Example
    this.subjectObj = new Subject()
    this.subjectObj.subscribe((res:any) => {
    this.subjectData1 = res;
    console.log(res);  
    });
    this.subjectObj.subscribe((res:any) => {
      this.subjectData2 = res;
      console.log(res);  
    });
    this.subjectObj.subscribe((res:any) => {
        this.subjectData3 = res;
        console.log(res);  
    });

    this.subjectObj.next(Math.random());
    
  }

  Listner(res: any) {
    this.obserableobjData1 = res;
    console.log(res);
  }

  // For Observables
  AsyncSream(Observer: any) {
    // var time = setInterval(() => {
    //   Observer.next(Math.random());
    // }, 1000);
    var time = Observer.next(Math.random())
  }

  ngOnDestroy() {
    this.objectUnbscribe.unsubsribe();
  }
}

bootstrapApplication(App);
