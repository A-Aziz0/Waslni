import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.css']
})
export class PrimaryBtnComponent implements OnInit {

  @Input() text:string = "";
  @Input() link:string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
