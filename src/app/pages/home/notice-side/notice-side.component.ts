import { Component } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { CardSearchComponent } from 'src/app/shared/card-search/card-search.component';


@Component({
  selector: 'app-notice-side',
  templateUrl: './notice-side.component.html',
  styleUrls: ['./notice-side.component.css']
})
export class NoticeSideComponent {
index : boolean = true
indexCards : boolean = true
pesquisa : string = ""

simulationApiDataNoticiesGames: any[] = [
  {keyWord: "metalgearsolid", title:"Vazaram novas gameplays do melhor jogo de todos os tempos", url: "./../../../../assets/mgsgameplay.jpeg", autor: "José Morais", value: false},
  {keyWord: "callofduty", title:"A lendaria franquia está de volta e já concorre nas categorias goty", url: "./../../../../assets/codghost.jpeg", autor: "José Morais", value: false},
  {keyWord: "godofwar", title:"Ator de kratos desmente novidades sobre a franquia", url: "./../../../../assets/gowvalhala.jpeg", autor: "José Morais", value: false},
  {keyWord: "reddeadredemption", title:"Após dois anos, player zera sem morrer nem mesmo uma vez", url: "./../../../../assets/readdead.jpeg", autor: "José Morais", value: false}
]

game : any[]= []


serchGame(pesquisa: string, game: any[]){
  let gameName = pesquisa.toLowerCase()
  gameName = gameName.replace(/\s+/g, '')
  let gameFind = game.filter((evt)=>{
    if(evt.keyWord === gameName){
          return evt
    }
  })
  return this.exibitionGame(gameFind) 
}

exibitionGame(returnGame: any[]){
  if(returnGame.length === 0){this.index=true}else{this.index = false}
  let gameFinded : any[] = returnGame.map((evt)=>{
    evt.value = true
    return evt
  })

  this.game = gameFinded
  console.log(this.game)
  
}

}
