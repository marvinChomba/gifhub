import { Injectable } from '@angular/core';
import {Gif} from "./gif"
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  gifs:Gif[] = [

  ]

  constructor(private http:HttpClient) {

  }
  getTrending(num) {
    this.http.get(`http://api.giphy.com/v1/gifs/trending?&api_key=FfZSvSPRJHLonofaNDrmYyjQZj9bHenX&limit=${num}`).subscribe(data => {
    data["data"].forEach(elem => {
      let img = elem.images.original.url;
      this.gifs.push(new Gif(img));
    })
  })
  }
  deleteArr() {
    this.gifs = [];
  }
  
}
