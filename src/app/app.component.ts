import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Item  } from './Item'
import { Status  } from './Status'

import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  itemIndex !: number;
  
  listItem:Item[]  = [
    {
      id: 1,
      name:'Run',
      complete: Status.yes,
    }, 
  ]

  constructor(public todoService: TodoService ){
     this.sortItem();
  
  }
  sortItem(){
     this.todoService.sortbyItem
  }

  addItem(itemName:string){
    const findItem = this.listItem.find((item) => item.name === itemName)
      if (!findItem) {
        const itemNew: Item = {
          id: (this.listItem.length + 1),
          name : itemName,
          complete : Status.no
        }
        this.listItem.unshift(itemNew);
        Swal.fire({  
          position: 'top-end',  
          icon: 'success',  
          title: 'Create Task Successfuly', 
          showConfirmButton: false, 
          timer: 800  
        });
        this.listItem.sort((a,b) =>  Number(a.complete) - Number(b.complete));
      }
      else{
        Swal.fire(  
          'Task already!',  
          'Cancelled',  
          'error',
        )  
      }
  }
  deleteItem(id: number){
    Swal.fire({
      title: `Are you sure want to remove?`,
      text: 'You can not recuperate this document!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((response: any) => {
      if (response.value) {
        if (this.listItem.length === 1) {
          Swal.fire({
          title: 'This is a last item!',
          icon: 'error',
          showCloseButton:true
    })
        }
        else{ 
          this.listItem.splice(id , 1);
          Swal.fire({  
            position: 'top-end',  
            icon: 'success',  
            title: 'Deleted!',
            text:  'Deleted one item.',
            showConfirmButton: false
          });
        }
        
      }
    })
  }
  completeItem(id:number){
    this.listItem.forEach((item, index) => {
      if(item.id == id) {
        this.listItem[index] = {...item, complete: Status.yes}
        Swal.fire({  
          position: 'top-end',  
          icon: 'success',  
          title: 'Completed',  
          showConfirmButton: false,  
          timer: 1000  
        });
        this.sortItem();
      }
    })
  }

  ngOnInit(): void {
  }

}
