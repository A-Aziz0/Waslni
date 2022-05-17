import { Injectable } from '@angular/core';
import {PlanEnum} from "../enums/plan-enum";
import {PaymentModel} from "../models/payment-model";
import {PeriodEnum} from "../pages/payment/payment.component";
import {MessageServiceService} from "./message-service.service";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  choice = PlanEnum.None;
  isSubscribed:boolean = false;
  constructor(private msgService: MessageServiceService) {
    if(localStorage.getItem("plan")){
      this.isSubscribed = true;
    }
  }

  subscribeUser(paymentModel:PaymentModel, period:PeriodEnum){
    localStorage.setItem("plan", this.choice.toString());
    localStorage.setItem("cardNumber", paymentModel.cardNumber.join(""));
    localStorage.setItem("cvv", paymentModel.cvvNumber);
    localStorage.setItem("period", period.toString());
    localStorage.setItem("expireDate", paymentModel.expireDate.toDateString());
    localStorage.setItem("name", paymentModel.firstName + " " + paymentModel.secondName);
    localStorage.setItem("address", `${paymentModel.streetAddress} - ${paymentModel.apartmentNumber}, ${paymentModel.zipCode} ${paymentModel.state}`);
    this.msgService.showMassage("You subscribed successfully", "bg-teal-500")

  }



}
