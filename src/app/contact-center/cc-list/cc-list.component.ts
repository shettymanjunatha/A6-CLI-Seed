import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-cc-list',
  templateUrl: './cc-list.component.html',
  styleUrls: ['./cc-list.component.css']
})
export class CcListComponent implements OnInit {

  ccList: User[];

  constructor() {
    console.log("Contact center loaded")
   }

  ngOnInit() {
    this.ccList = [{
      firstName: 'CC Navjot',
      lastName: 'Kaur',
      phoneNumber: +12345678945,
      extension: 8945
    },{
      firstName: 'CC Second',
      lastName: 'User',
      phoneNumber: +12345678943,
      extension: 8943
    },{
      firstName: 'CC Third',
      lastName: 'User',
      phoneNumber: +12345678941,
      extension: 8941
    },{
      firstName: 'CC Forth',
      lastName: 'User',
      phoneNumber: +123456789233,
      extension: 8233
    },{
      firstName: 'CC Fifth',
      lastName: 'User',
      phoneNumber: +1234562342,
      extension: 2342
    },{
      firstName: 'CC Sixth',
      lastName: 'User',
      phoneNumber: +1234509876,
      extension: 9876
    },{
      firstName: 'CC Seventh',
      lastName: 'User',
      phoneNumber: +12345601005,
      extension: 1005
    },{
      firstName: 'CC Eighth',
      lastName: 'User',
      phoneNumber: +12345678322,
      extension: 8322
    },{
      firstName: 'CC Nineth',
      lastName: 'User',
      phoneNumber: +12345601915,
      extension: 1915
    },{
      firstName: 'CC Tenth',
      lastName: 'User',
      phoneNumber: +12345603944,
      extension: 3944
    }]
  }

}
