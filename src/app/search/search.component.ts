import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { SearchService } from "../search.service";
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  gifs;
  constructor(private searcher:SearchService) {
   }

  ngOnInit() {
  }
  searchIt() {
    // this.gifs.splice(0)
    let inputValue = $("#searchBar").val().toString();
    inputValue = inputValue.replace(/\s+/g,"+").toLowerCase();
    this.searcher.searchGif(inputValue);
    this.gifs = this.searcher.gifs;
    $("#searchBar").val("")
  }


  
}
