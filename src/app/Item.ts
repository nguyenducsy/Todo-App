import { Status } from "./Status";

export class Item {
     id: number;
     name: string;
     complete: Status;
     constructor(id :number , name:string , complete: Status){
          this.id = id;
          this.name = name;
          this.complete = complete;
     }
}