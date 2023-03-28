import { Component } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

    accountList = [
        {accNo:'sav101',accFirstName:'rahul',accLastName:'jain',accBalance:18000,accIsActive:true,accGender:'Male'},
        {accNo:'cur102',accFirstName:'Nikhil',accLastName:'jain',accBalance:18000,accIsActive:true,accGender:'Male'},
        {accNo:'sav103',accFirstName:'Priya',accLastName:'jain',accBalance:18000,accIsActive:true,accGender:'Female'},
        {accNo:'sav104',accFirstName:'Riya',accLastName:'jain',accBalance:18000,accIsActive:false,accGender:'Female'},
        {accNo:'pf105',accFirstName:'Jiya',accLastName:'jain',accBalance:18000,accIsActive:true,accGender:'Female'},
        {accNo:'SAv106',accFirstName:'Diya',accLastName:'jain',accBalance:18000,accIsActive:true,accGender:'Female'},
        {accNo:'sav107',accFirstName:'Mohan',accLastName:'jain',accBalance:18000,accIsActive:false,accGender:'Male'},
        {accNo:'cur108',accFirstName:'Rohan',accLastName:'jain',accBalance:18000,accIsActive:true,accGender:'Male'},
        {accNo:'PF109',accFirstName:'Sohan',accLastName:'jain',accBalance:18000,accIsActive:true,accGender:'Male'},
        {accNo:'Pf110',accFirstName:'Karan',accLastName:'jain',accBalance:18000,accIsActive:false,accGender:'Male'},

    ]
}
