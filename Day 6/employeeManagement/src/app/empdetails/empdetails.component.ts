import { Component } from '@angular/core';

@Component({
  selector: 'app-empdetails', //name of your component
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent {

    empNo=101;
    empName="Kunal";
    empDesignation = "Sales";
    empSalary = 9000;
    empIsPermenant = false;

    greetEmp()
    {
      return "Hello " + this.empName + " we are happy to have you as a part of our team";
    }



}
