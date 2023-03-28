import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  empNo = 101;
  empFirstName = "nikhil";
  empLastName = "shah";
  empDesigantion= "Consultant";
  empSalary = 12000;
  empJoiningDate = new Date();

  empContactInfo ={
    email:'nikhil@gmail.com',
    phone:22989,
    emergency:909090,
    linkedIn:'nikhil.shah2008@gmail.com'
  }


}
