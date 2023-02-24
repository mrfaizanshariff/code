import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { About } from 'src/models/homePageData';
import { SharedServiceService } from 'src/services/shared-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('drawer') drawer!: MatSidenav;

  imageSrc:Array<Object>=[{
    image:"https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg?auto=compress&cs=tinysrgb&w=1600",
    thumbImage:"https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg?auto=compress&cs=tinysrgb&w=1600"
  
  },
  {
    image:"../../assets/one.jpg",
    thumbImage:"../../assets/one.jpg"
  },
  // {
  //   image:"../../assets/two.jpg",
  //   thumbImage:"../../assets/two.jpg"
  // },
  {
    image:"../../assets/three.jpg",
    thumbImage:"../../assets/three.jpg"
  },
  // {
  //   image:"../../assets/four.jpg",
  //   thumbImage:"../../assets/four.jpg"
  // },
]
  constructor(private sharedService:SharedServiceService,
    private httpClient: HttpClient) {
   
     }
  drawerToggle:any=false;
  about:any;
  whyUs:any;
  ngOnInit(): void {
    this.sharedService.menuClicked.subscribe(res=>{
      this.drawer.toggle()
    })
    this.httpClient.get("/assets/textContent.json").subscribe(
      (res:any)=>{
        console.log(res);
        this.about=res?.home?.about;
        this.whyUs=res?.home?.whyUs;
      }
      )
  }

  
}
