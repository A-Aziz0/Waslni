import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  show:boolean = false;
  public msg: string = "";
  public color: string = "";
  constructor() { }
  async showMassage(msg: string, color: string, duration:number = 5000) {
    this.msg = msg;
    this.color = color;
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.msg = "";
      this.color = "";
    }, duration)

  }
}
