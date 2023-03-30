import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;
  myName = "Karan";


  incrementCounter()
  {
    this.counter = this.counter + 1;
    return this.counter;
  }
  decrementCounter()
  {
    this.counter = this.counter - 1;
    return this.counter;
  }

  constructor() { }
}
