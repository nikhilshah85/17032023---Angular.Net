import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // a. Plain properties (primitive types - string, int, bool etc)
    firstName = "Nikhil";
    lastName = "Shah";
    city = "Mumbai";
    salary = 3000;
    isPermenant = true;

	// b. Primitive array (array of string, numbers

  friends = ['Nidhi','Priya','Ashok','Rohan','Aman','Amar','Ketki']


  addNewFriend()
  {
    this.friends.push('Mohini');
  }

  technologyList = ['Angular','React','Node','.Net','SQL Server','Azure','DevOps','Microservices']

  



	// c. JSON objects

  projectDetails = {
    projectName:'Banking Software',
    projectStrength:50,
    projectRevenue:3000000,
    projectIsLive:true
  }  

	// d. JSON Object array

  


}












