import { Injectable } from '@angular/core';
import { Gif } from "./gif";
import {HttpClient} from "@angular/common/http";
// import {environment} from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  gifs:Gif[] = []
  constructor(private http:HttpClient) { }
  searchGif(keyword,num = 12) {
    this.http.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=FfZSvSPRJHLonofaNDrmYyjQZj9bHenX&limit=${num}`).subscribe(data => {
      data["data"].forEach(elem => {
        let img = elem.images.original.url;
        this.gifs.push(new Gif(img));
        if(this.gifs.length > 12) {
          this.gifs.splice(0,12)
        }
      })
    })
  }
}
