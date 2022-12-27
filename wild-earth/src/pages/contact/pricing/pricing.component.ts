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

  constructor() { }

  ngOnInit(): void {
  }

}
