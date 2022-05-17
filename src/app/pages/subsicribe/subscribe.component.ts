import {Component, OnInit} from '@angular/core';
import {faCircleCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {PlanEnum} from "../../enums/plan-enum";
import {SubscribeService} from "../../services/subscribe.service";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  circleCheck = faCircleCheck;
  circleX = faCircleXmark;

  plan = PlanEnum;


  constructor(public subService:SubscribeService) {
  }

  ngOnInit(): void {
  }

  setChoice(choice:PlanEnum) {
    console.log(choice);
    this.subService.choice = choice
  }

}
