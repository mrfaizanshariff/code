import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedServiceService } from 'src/services/shared-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  threeDImageObj:any={
    greenGrass:"https://assets.codepen.io/1462889/grass.png",
    tent:"https://assets.codepen.io/1462889/camp.png",
    bringYourTent:"/assets/tent2.png",
    bush:"https://assets.codepen.io/1462889/Ivy.png",
    bushRock:"https://assets.codepen.io/1462889/IvyRock.png",
    coracleBoat:"/assets/coracle_boat.png",
    ocean:"https://assets.codepen.io/1462889/sea.png",
    waterSplash:"https://assets.codepen.io/1462889/water.png",
    waterRock:"https://assets.codepen.io/1462889/Stone.png"
  }
  @ViewChild('drawer') drawer!: MatSidenav;
  imageSrc:string="https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&w=1600"
  constructor(private shareService:SharedServiceService) { }

  ngOnInit(): void {
    this.shareService.menuClicked.subscribe(res=>{
        this.drawer.toggle()
    })
  }

}
