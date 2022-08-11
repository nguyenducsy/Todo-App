import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.html',
  styleUrls: ['./item-component.scss']
})
export class ItemComponent implements OnInit {

  @Input() listItem:any[] = [];


  @Output() deleItem = new EventEmitter<number>();
  @Output() compItem = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.listItem);
  }
  delete(id:number){
    this.deleItem.emit(id)
  }
  complete(id:number){
    this.compItem.emit(id)
  }
}
