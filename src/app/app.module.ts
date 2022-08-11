import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponentComponent } from './input/input-component';
import { ListComponentComponent } from './list-component/list-component.component';
import { ItemComponent } from './item/item-component';
import { FormsModule } from '@angular/forms';
// toastr alert
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    ListComponentComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
