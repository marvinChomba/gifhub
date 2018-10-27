import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsComponent} from "../details/details.component";
import { SearchComponent } from "../search/search.component";
import {RouterModule,Routes} from '@angular/router'

const routes:Routes = [
  {path:"trending",component:DetailsComponent},
  {path:"search",component:SearchComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
