import {IPayment} from "../interfaces/i-payment";

export class PaymentModel implements IPayment {
  apartmentNumber: string = "";
  cardNumber:string[] = [];
  cvvNumber: string = "";
  expireDate: Date = new Date();
  firstName: string = "";
  secondName: string = "";
  state: string = "";
  streetAddress: string = "";
  zipCode: string = "";
}
