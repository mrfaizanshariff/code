import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedServiceService } from 'src/services/shared-service.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;

  constructor(private shareService:SharedServiceService) { }

  ngOnInit(): void {
    this.shareService.menuClicked.subscribe(res=>{
      this.drawer.toggle()
  })
  }

}
