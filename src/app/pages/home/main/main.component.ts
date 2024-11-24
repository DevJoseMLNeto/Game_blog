import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(){}

  apiSimulationMainNotices: any[]=[
  {url: "./../../../../assets/trofeu_gameawards.webp", titulo: "Mais um ano em que GOTY incomoda a comunidade dos games.", autor: "José Morais", value: true},
  {url: "./../../../../assets/PS5PRO.jpeg", titulo: "Para alguns apenas um pequeno passo para outros inovação.", autor: "José Morais", value: false}
  ]

  apiSimulationSecundaryNotices: any[]=[
    {titulo: "Tekken 8 é o favorito, mas será que o Sparkin Zero vai ter chance?", autor: "José Morais", value: true, url: "./../../../../assets/tekken.jpeg"},
    {titulo: "Cada dia mais perto de Metal Gear Delta", autor: "José Morais", value: true, url: "./../../../../assets/mgs.jpeg"},
    {titulo: "Quais os pontos tornam Black mith wukong o grande favorito", autor: "José Morais", value: true, url: "./../../../../assets/BMU.jpeg"},
    {titulo: "Saiba tudo sobre os indicados a melhor adaptação", autor: "José Morais", value: false, url: "./../../../../assets/arcane.jpeg"}
  ]


  secundaryMenu(){
    let i = this.apiSimulationSecundaryNotices
    let arrRemoved = i.shift() 
    i.push(arrRemoved)   
    i[i.indexOf(arrRemoved)].value = false
    i[2].value = true
  }

  primaryMenu(){
    let i = this.apiSimulationMainNotices
    let arrRemovida = i.shift()
    i.push(arrRemovida)
    i[i.indexOf(arrRemovida)].value = false
    i[0].value = true
  }

  mouseIMG = ""
  tituloM = ""
  autorM = ""
  mouseEnter(){
    this.mouseIMG = "ativo"
    this.tituloM = "tituloMaior"
    this.autorM = "autorMaior"
  }
  mouseLeave(){
    this.mouseIMG = ""
    this.tituloM = ""
    this.autorM = ""
  }


}