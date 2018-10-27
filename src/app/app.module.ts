import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { TrendingService } from "./trending.service";
import { SearchComponent } from './search/search.component';
import {SearchService} from "./search.service"
import {FormsModule} from "@angular/forms"
import {RoutingModule} from "./routing/routing.module"
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [TrendingService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
