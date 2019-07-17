import { Component, OnInit } from '@angular/core';

export class Index {
  [index: string]: any
}

export class Select {
  id: string;
  value: string;
}

export class Test {
  id: string;
  toto: Select;

  constructor() {
    id: '';
    toto: new Select();
  }
}

export function affectValueToassociativeArray<T extends Index, U>(objet: T, key: string, classValue: U, newValue: U) {
  if (Object.keys(objet).includes(key)) {
        objet[key]=newValue;
    }
}

export function associativeArray<T extends Index, U>(objet: T, key: string, classValue: U): boolean {
  
  if (Object.keys(objet).includes(key)) {
    if ((typeof classValue === 'string' || 
    typeof classValue === 'number' || 
    typeof classValue === 'boolean') &&
    typeof objet[key] === typeof classValue) {
      return true
    } else {
      const keyOfClass: Array<string> = Object.keys(classValue);

      if (typeof objet[key] !== 'string' &&
      typeof objet[key] !== 'number' && 
      typeof objet[key] !== 'boolean') {
        for (const prop in objet[key]) {
            for (let i = 0; i < keyOfClass.length; i++) {
                if (prop === keyOfClass[i]) {
                    break;
                } else {
                    if (keyOfClass.length === i + 1) {
                        return false;
                    }
                }
            }
            continue;
        }
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false
  }
}



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  public tutu: boolean

  ngOnInit():void {
    this.tutu = false;
    const test = new Test();
    this.tutu = associativeArray<Test, string>(test, 'toto', '');
    // test.affectValueToassociativeArray<Select>( 'toto', new Select(), {id: '', value: 'test'})
    affectValueToassociativeArray<Test, Select>(test, 'toto', new Select(), {id: '', value: 'test'})
    console.log(test)
  }
  
}

