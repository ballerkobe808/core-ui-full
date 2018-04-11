import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
// third party libs
import { Subscription } from 'rxjs';
// import * as _ from 'lodash';
// import { SwalComponent } from '@toverux/ngx-sweetalert2';


@Component({
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

 


  constructor() { }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }




}