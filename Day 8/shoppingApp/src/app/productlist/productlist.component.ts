import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  productList = [
    {pId:101, pName:'Pepsi',pCategory:'Cold-Drink', pPrice:50},
    {pId:102, pName:'IPhone',pCategory:'Electronics', pPrice:50},
    {pId:103, pName:'Samsung TC',pCategory:'Electronics', pPrice:50},
    {pId:104, pName:'Air-Pods',pCategory:'Accessories', pPrice:50},
    {pId:105, pName:'Appy',pCategory:'Cold-Drink', pPrice:50},
    {pId:106, pName:'Beat Speakers',pCategory:'Accessories', pPrice:50},
  ]

}
