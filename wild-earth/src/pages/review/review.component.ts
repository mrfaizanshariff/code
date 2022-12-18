import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedServiceService } from 'src/services/shared-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @ViewChild('drawer') drawer!: MatSidenav;
  imageSrc:string="https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&w=1600"
  constructor(private shareService:SharedServiceService) { }

  ngOnInit(): void {
    this.shareService.menuClicked.subscribe(res=>{
        this.drawer.toggle()
    })
  }

}
