import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //primitive data types
    appName = "ShoppingAPP";
    trainingDay = "Day 4";
    trainer = "Nikhil";
    topic = "Components and Data";

  //primitive array
  productList = ['Pepsi','Nike','Puma','Maggie','Appy','Sandwitch']

  //JSON Objects
  orderDetails = {
    orderId:101,
    orderValue:6000,
    orderCustomer:'Priya',
    orderCity:'Pune',
    orderDate:'10-March-2023'
  }

  //JSON Object Array

  productDetails = [
    {pId:101, pName:'Pepsi',pCategory:'Cold-Drinks',pPrice:50,pIsInStock:true},
    {pId:102, pName:'IPhone',pCategory:'Electronics',pPrice:50,pIsInStock:true},
    {pId:103, pName:'Maggie',pCategory:'Fast-Food',pPrice:50,pIsInStock:false},
    {pId:104, pName:'Nike Air',pCategory:'Shoes',pPrice:50,pIsInStock:true},
    {pId:105, pName:'Appy',pCategory:'Cold-Drinks',pPrice:50,pIsInStock:true},
    {pId:106, pName:'Air Pods',pCategory:'Electronics',pPrice:50,pIsInStock:false},
    {pId:107, pName:'Dell Lattitude',pCategory:'Electronics',pPrice:50,pIsInStock:true},
    {pId:108, pName:'Fossil',pCategory:'Electronics',pPrice:50,pIsInStock:true},
    {pId:109, pName:'Mac Book Pri M1',pCategory:'Electronics',pPrice:50,pIsInStock:false},
  ]
















  

 




}
