import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/services/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  audio = new Audio("../assets/nature.mp3");
  menuClick:boolean=false;
  play:boolean=false
  constructor(private sharedService:SharedServiceService) {
    this.audio.load();
    this.audio.loop=true;
   }

  ngOnInit(): void {
  }
  onMenuClick(){
    this.menuClick=!this.menuClick
    this.sharedService.menuClicked.next(this.menuClick)
  }
  playAudio(){
    this.play=!this.play
    if(this.play==true){
      this.audio.play();
    }else{
      this.audio.pause();
    }
     
    console.log('musicc onn');
    
  }
}
