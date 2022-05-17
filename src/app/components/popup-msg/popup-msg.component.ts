import {Component, OnInit} from '@angular/core';
import {MessageServiceService} from "../../services/message-service.service";

@Component({
  selector: 'app-popup-msg',
  templateUrl: './popup-msg.component.html',
  styleUrls: ['./popup-msg.component.css']
})
export class PopupMsgComponent implements OnInit {



  constructor(public msgService:MessageServiceService) {
  }

  ngOnInit(): void {
  }

}
