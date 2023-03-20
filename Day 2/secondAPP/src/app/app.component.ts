import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // name of the component
  templateUrl: './app.component.html', //refere to html file
  styleUrls: ['./app.component.css'] //array of css files
})
export class AppComponent {
    //this is a class, this will properties, functions, variables, etc... OOPS

    applicationName = "Shopping APP";
    developerName =  "Nikhil Shah";
    teamSize = 20;
    isAppLive = false;

    productPrice = 1000;
    discount = 5;

    greetMessage  = "";
    greetUser()
    {
      this.greetMessage = "Hello, good morning, welcome to my Shopping APP";      
    }




}
