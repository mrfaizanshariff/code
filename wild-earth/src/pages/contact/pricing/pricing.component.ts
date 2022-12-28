import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  @Input() choice1:string='';
  @Input() choice2:string='';
  @Input() checkBoxNo:string='';
  @Input() subChoice1:string='';
  @Input() subChoice2:string='';
  @Input() subChoice1Price:string='';
  @Input() subChoice2Price:string='';
  @Input() img1Center:string='';
  @Input() img2Center:string='';
  @Input() img1left:string='';
  @Input() img2left:string='';
  @Input() img2right:string='';
  @Input() img1right:string='';
  @Input() img1btm:string='';
  @Input() img2btm:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
