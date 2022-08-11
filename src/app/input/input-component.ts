import { HostListener , Component, OnInit , Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.html',
  styleUrls: ['./input-component.scss']
})
export class InputComponentComponent implements OnInit {
  @Output() inputItem = new EventEmitter<string>();
  @ViewChild('ipItem') INPUT: any;

  constructor() { 
  }

  getInput(value:any){
    this.inputItem.emit(value);
    this.INPUT.nativeElement.value = '';
  }

  
  ngOnInit(): void {
  }

}
