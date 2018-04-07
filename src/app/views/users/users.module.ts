import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {DecimalPipe, CurrencyPipe, CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

// third party
import {Ng2PaginationModule} from 'ng2-pagination';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { UsersComponent } from './users.component';

//Routing
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
    Ng2PaginationModule,
    SweetAlert2Module,
    UsersRoutingModule,
    
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule { }
