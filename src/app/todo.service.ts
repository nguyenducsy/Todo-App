import { Injectable } from '@angular/core';
import { Item } from './Item'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public listItem !: Item[];
  constructor() { }

  public sortbyItem(){
    //   sort alphabet
    this.listItem.sort(function(a, b) {
      return a.name.localeCompare(b.name)
    });
     // sort true false 
   this.listItem.sort((a,b) =>  Number(a.complete) - Number(b.complete));
  }
}
