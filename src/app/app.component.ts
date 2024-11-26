import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-games';
  constructor(){}
  ngOnInit(){
    alert("Os games disponiveis para pesquisa são Red Dead Redemption, God of war, Metal Gear Solid e Call of duty.")
  }
}
