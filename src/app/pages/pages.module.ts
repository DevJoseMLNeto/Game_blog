import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './home/menu-bar/menu-bar.component';
import { NoticeSideComponent } from './home/notice-side/notice-side.component';
import { MainComponent } from './home/main/main.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuBarComponent,
    NoticeSideComponent,
    MainComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
