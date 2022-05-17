export interface IPayment {
  firstName: string,
  secondName: string,
  cardNumber: string[],
  cvvNumber: string,
  expireDate: Date,
  streetAddress: string,
  apartmentNumber: string,
  zipCode: string,
  state: string,
}
