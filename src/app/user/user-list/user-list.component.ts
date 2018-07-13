import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[];

  constructor() {
    console.log("User loaded")
   }

  ngOnInit() {
    this.userList = [{
      firstName: 'Navjot',
      lastName: 'Kaur',
      phoneNumber: +12345678945,
      extension: 8945
    },{
      firstName: 'Second',
      lastName: 'User',
      phoneNumber: +12345678943,
      extension: 8943
    },{
      firstName: 'Third',
      lastName: 'User',
      phoneNumber: +12345678941,
      extension: 8941
    },{
      firstName: 'Forth',
      lastName: 'User',
      phoneNumber: +123456789233,
      extension: 8233
    },{
      firstName: 'Fifth',
      lastName: 'User',
      phoneNumber: +1234562342,
      extension: 2342
    },{
      firstName: 'Sixth',
      lastName: 'User',
      phoneNumber: +1234509876,
      extension: 9876
    },{
      firstName: 'Seventh',
      lastName: 'User',
      phoneNumber: +12345601005,
      extension: 1005
    },{
      firstName: 'Eighth',
      lastName: 'User',
      phoneNumber: +12345678322,
      extension: 8322
    },{
      firstName: 'Nineth',
      lastName: 'User',
      phoneNumber: +12345601915,
      extension: 1915
    },{
      firstName: 'Tenth',
      lastName: 'User',
      phoneNumber: +12345603944,
      extension: 3944
    }]
  }

}
