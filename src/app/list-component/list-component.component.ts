import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Item } from '../Item';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  @Input() listItem:Item[] = [];
  @Output() completeId = new EventEmitter<number>();
  @Output() deleteId = new EventEmitter<number>();
  constructor() { 
  }
  delete(id:number){
    this.deleteId.emit(id)
  }
  complete(id:number){
    this.completeId.emit(id);
  }
  ngOnInit(): void {
    // console.log(this.listItem);
    }
}
