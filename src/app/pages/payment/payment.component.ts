import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {MessageServiceService} from "../../services/message-service.service";
import {SubscribeService} from "../../services/subscribe.service";
import {PlanEnum} from "../../enums/plan-enum";
import {PaymentModel} from "../../models/payment-model";
import {IPayment} from "../../interfaces/i-payment";

export enum PeriodEnum {
  Yearly = "Yearly",
  Monthly = "Monthly",
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  plans = PlanEnum;
  periodEnum = PeriodEnum
  period = PeriodEnum.Yearly;

  paymentModel: IPayment = new PaymentModel();


  constructor(public subService: SubscribeService, private authService: AuthenticationService, private router: Router, private msgService: MessageServiceService) {
    if (!authService.isSignedIn) {
      msgService.showMassage("You need to sign in first", "bg-red-500").then();
      this.router.navigate(["SignIn"])
    }
    if (subService.choice == this.plans.None) {
      msgService.showMassage("Choose a plan first", "bg-red-500").then();
      this.router.navigate(["subscribe"])
    }
    if(subService.isSubscribed){
      msgService.showMassage("You are paid for a subscription", "bg-red-500").then();
      this.router.navigate(["services"])
    }
  }

  ngOnInit(): void {
    console.log(this.subService.choice)
  }


  periodToggle(toggle: PeriodEnum) {
    this.period = toggle;
  }

  submit() {
    this.subService.subscribeUser(this.paymentModel, this.period);
    this.router.navigate(["services"]).then();
  }


}
