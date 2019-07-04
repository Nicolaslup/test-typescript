import { Component, OnInit } from '@angular/core';

export class Test {
  name: string;
  age: number;

  constructor() {
    this.name = '';
    this.age = 0;
  }
}

export function sortTyping<T>(DynamicClass: new (...params: any[]) => T, tab: Array<T>, key: string): Array<T> | null {
  const obj = Object.getOwnPropertyNames(new DynamicClass());
  
  let newTab: Array<T> | null = new Array<T>();
  if (obj.includes(key)) {
    newTab = tab.sort((a: T, b: T) => {
        return a[key] - b[key];
      }
    )
  } else {
    newTab = null;
  }
  return newTab
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  public tab2: Array<Test>;
  ngOnInit():void {
    const tab: Array<Test> = new Array<Test>(
      {name: 'john', age: 18},
      {name: 'celia', age: 20},
      {name: 'tom', age: 16},
      {name: 'nic', age: 21},
    );

    this.tab2 = sortTyping<Test>(Test, tab, 'age')
  }
  
}

