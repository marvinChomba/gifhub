import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gif} from '../gif'
import { TrendingService } from "../trending.service"
import * as $ from"jquery"
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  gifs;

  constructor(private http:HttpClient,private trending:TrendingService) {
   }

  ngOnInit() {
    this.trending.getTrending(12);
    this.gifs = this.trending.gifs;
    
  }
  loadMore() {
    this.trending.getTrending(24);
    this.gifs = this.trending.gifs;
    this.gifs.splice(0,12);
    $("#loadMore").hide()
  }

}
