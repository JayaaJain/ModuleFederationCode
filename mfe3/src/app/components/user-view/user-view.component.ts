import { Component, OnInit } from '@angular/core';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';
// import { AddTopicModalComponent } from '../add-topic-modal/add-topic-modal.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  
  constructor() { }
  // constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // openAddUserModal() {
  //   const modalRef = this.modalService.open(AddUserModalComponent,{ size: 'sm' });
  // }
  // openAddTopicModal() {
  //   const modalRef = this.modalService.open(AddTopicModalComponent,{ size: 'xl' });
  // }

}
