import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSearchComponent } from './card-search/card-search.component';



@NgModule({
  declarations: [
    CardSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardSearchComponent
  ]
})
export class SharedModule { }
