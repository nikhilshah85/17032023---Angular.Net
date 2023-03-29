import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number,category:string ) {
      if (category == 'Cold-Drink') {
        return value -  (value * 10) / 100;
      }
      else if(category == 'Electronics')
      {
        return value - (value * 20) / 100;
      }
      else if(category == 'Accessories')
      {
        return value - (value * 5) / 100;
      }
      return value;

  }

}
