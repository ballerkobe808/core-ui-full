import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {DecimalPipe, CurrencyPipe, CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

// third party
// import {Ng2PaginationModule} from 'ng2-pagination';
// import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { CollapsesComponent } from './collapses.component';



import { SettingsComponent } from './settings.component';

//Routing
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CollapseModule,
    

    // Ng2PaginationModule,
    // SweetAlert2Module,
    SettingsRoutingModule,
    
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule { }
