import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
// third party libs
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { SwalComponent } from '@toverux/ngx-sweetalert2';


@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent {

  errorMsg: string; // error message to display if there is a problem w the server
  successMessage: string = '';
  // userList: any; // list of users to display
  cpaFlag: boolean = false;
  cpaOnBehalfFlag: boolean = false;

  subscription: Subscription;

  // the following is for paging and search filtering
  numberOfResultsToShowArray = [2, 10, 20, 30, 40, 50];
  numberToShow = 10;
  p: any;

  // temp object to hold the user being edited
  user: any = {  id: '', name: '', email: '', role: '', status: '' }

  @ViewChild('addSwal') addSwal: SwalComponent;

  userList = [
    { id: '1', name: 'Jim Bob', email: 'danielkong@lkj.com', rightsAssigned: 'Pending Approval', showMore: false, subUsers: '', status: 'pending', manage: false, resend: true, remove: false},
    { id: '2', name: 'Mario n Luigi', email: 'danielkong@lkj.com', rightsAssigned: 'Pending Approval', showMore: false, subUsers: '', status: 'pending', manage: false, resend: true, remove: false},
    { id: '3', name: 'Donkey Kong', email: 'danielkong@lkj.com', rightsAssigned: 'Tax Inquiry, Appeals, E-Response',  showMore: false, subUsers: '', status: 'active', manage: true, resend: false, remove: true},
    { id: '4', name: 'Samus Metroid', email: 'danielkong@lkj.com', rightsAssigned: 'Alerts, Request Credit Refunds', showMore: false, status: 'active', manage: true, resend: false, remove: true, subUsers: 'john@gmail.com, peter@gmail.com, owen@hotmail.com'},
  ]


  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}


  ngOnInit(): void {
    this.getUserList();
  }


  /**
   * Grab the list of users 
   */
  getUserList() {
    let url = '/edit-profile/subuser-list';

    // get the list of users to display
    // this.restSubscription = this.restService.get(url).subscribe(
    //   response => {
    //     this.userList = response;

    //     for (const user of this.userList) {
    //       if (user.administrator == 'Y' || user.superAdmin == 'Y') {
    //         user.role = 'Administrator'
    //       }
    //       else if (user.isTpaCpa && user.isTpaCpa == 'Y') {
    //         user.role = 'CPA/TPA User'
    //       }
    //       else {
    //         user.role = 'Sub User'
    //       }
    //     }
    //     this.userList = _.sortBy(this.userList, ['role', 'firstName']); 

    //   },
    //   (err) => {
    //     this.errorMsg = err;
    //   }
    // );
  }


  editUser(user) {
   
    this.user = Object.assign({}, user)
    // this.user = user;
    // show the modal
    this.addSwal.show();

  }

  saveUser() {

     // Find item index using _.findIndex (thanks @AJ Richardson for comment)
     var index = _.findIndex(this.userList, { id: this.user.id });
     // Replace item at index using native splice
     this.userList.splice(index, 1, this.user);
  }

  deleteUser(user) {
    _.remove(this.userList, function(currentObject) {
      return currentObject.id === user.id;
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    
  }



}