import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  //new object variable of counter service
   _counterSer:CounterService;

   //dependency injection
   constructor(_counterSerRef:CounterService)
   {
    this._counterSer = _counterSerRef;
   }


}
