import { Component } from '@angular/core';

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrls: ['./clientinfo.component.css']
})
export class ClientinfoComponent {

    clientList = ['Mercedes','Pepsi Co.', 'Bank Of America', 'Aon Hewitt', 'Nestle', 'SBI', 'CitiBank']

    clientManager = "Nikhil Shah";

  
}
