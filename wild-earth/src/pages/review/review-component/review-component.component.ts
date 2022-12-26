import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.scss']
})
export class ReviewComponentComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  authorImg:string="";
  author:string="";
  review:string="";
  reviewLink:string="";
  stars:Array<any>=[];
  reviewData:any;
  currentIndex:number=0;
  ngOnInit(): void {
    this.httpClient.get("/assets/textContent.json").subscribe(
      (res:any)=>{
       this.reviewData = res?.review
       this.setReview(0)
      })
  }

  setReview(index:any){
    this.authorImg = this.reviewData[index]?.authorImg;
    this.author=this.reviewData[index]?.name;
    this.review = this.reviewData[index]?.review;
    this.reviewLink = this.reviewData[index]?.reviewLink;
    this.stars = Array(Number(this.reviewData[index]?.stars)).fill('*'); // [4,4,4,4,4]  ;
  }

  previous(){
    if(this.currentIndex != 0){
      this.currentIndex = this.currentIndex - 1
      this.setReview(this.currentIndex)
    } else{
      this.currentIndex = this.reviewData?.length-1
      this.setReview(this.currentIndex)
    }
  }
  next(){
    if(this.currentIndex >= this.reviewData?.length-1){
      this.currentIndex = 0
      this.setReview(this.currentIndex)
    } else{
      this.currentIndex = this.currentIndex + 1;
      this.setReview(this.currentIndex)

    }
  }
}

interface ReviewData {
  name:string,
  stars:number,
  review:string,
  reviewLink:string
}[]