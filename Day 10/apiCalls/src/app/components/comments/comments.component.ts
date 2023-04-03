import { Component } from '@angular/core';
import { MakeapicallsService } from 'src/app/services/makeapicalls.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

    _makeapicall:MakeapicallsService;

    constructor(_makeapicallREF:MakeapicallsService)
    {
      this._makeapicall = _makeapicallREF;
    }
}
