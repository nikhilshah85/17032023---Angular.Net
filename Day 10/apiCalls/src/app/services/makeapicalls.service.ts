import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakeapicallsService {


    _http:HttpClient;
    commentsData:any;

  constructor(_httpRef:HttpClient) 
  {
    this._http = _httpRef;
   }

   getCommentsData()
   {
      this._http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data =>{
        this.commentsData = data;
        alert('Got the data');
      })
   }
   


}







