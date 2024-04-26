import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  public cards: any;
  public cardPicked: any;

  ngOnInit()
  {
    this.fillCards();
  }

  fillCards()
  {
    this.cards = [];

    let color = "coeur";
    this.p(color,1,"Tess","Concours de mîmes");
    this.p(color,2,"Amandine","Fais un show de drag queen/king");
    this.p(color,3,"Valou","Bisou Keupon");
    this.p(color,4,"Chloe","Freestyle");
    this.p(color,5,"Gamon","Choisi qui te chante une chanson");
    this.p(color,6,"Sebastien","Calin groupe");
    this.p(color,7,"Morgan","Choregraphie groupee");
    this.p(color,8,"Laure","Tout le monde fait un compliment a son voisin de droite");
    this.p(color,9,"Manu","Chante une chanson d'amour");
    this.p(color,10,"Laura","Tu peux te retirer un gage");
    this.p(color,11,"Lucila","Blind test alcoolise");
    this.p(color,12,"Jade","Choisi ton jumeau de verre");
    this.p(color,13,"Melanie","Envoi un message a ton crush");

    color = "carreau";
    this.p(color,1,"Manel","Joker en +");
    this.p(color,2,"Lou","Chante ou siffle une chanson, le premier qui trouve distribue 1 gorgee");
    this.p(color,3,"Selena","Prends un verre d'eau");
    this.p(color,4,"Lorcan","Parle en repliques de films/series");
    this.p(color,5,"Cedric","Raconte une premiere fois");
    this.p(color,6,"Sarah","Immunite pour ce tour");
    this.p(color,7,"Alex","Parle avec un accent");
    this.p(color,8,"Dim","Donne un shot mystere");
    this.p(color,9,"Noe","Le tableau ambulant");
    this.p(color,10,"Marou","Tu es Sanji");
    this.p(color,11,"Frame","Cul sec");
    this.p(color,12,"Floriane","Tour de j'ai deja, je n'ai jamais");
    this.p(color,13,"Jimmy","Fais de la musique");

    color = "trefle";
    this.p(color,1,"Florelle","Barman de la soiree");
    this.p(color,2,"Nakta","Distribue 42 gorgees");
    this.p(color,3,"Romane","Pile ou face pour un gage");
    this.p(color,4,"Arthur","Rouleur de la soiree");
    this.p(color,5,"Allan","Choisi qui fait un squat a chacune de tes gorgees");
    this.p(color,6,"Patou","Pile ou face pour un cul sec");
    this.p(color,7,"Coco","Shot a 3");
    this.p(color,8,"Nolwenn","Pile ou face pour une verite");
    this.p(color,9,"Etienne","Le prisonnier");
    this.p(color,10,"Mat","Le jeu de la piece");
    this.p(color,11,"Thibault","La roulette russe");
    this.p(color,12,"Angie","Invente une regle");
    this.p(color,13,"Ange","Photographe de la soiree");
    
    color = "pique";
    this.p(color,1,"Nico","Cul sec general");
    this.p(color,2,"Anais","Lance le de 20 pour savoir le nombre de gorgees que tu bois");
    this.p(color,3,"Lucien","Tournoi de ChiFouMi avec de l'alcool");
    this.p(color,4,"Joanna","On te donne 3 mots, tu dois trouver une musique avec chaque mot dans le titre ou les paroles");
    this.p(color,5,"Anto","Tu es le narrateur de la soiree");
    this.p(color,6,"Roxane","Balance un dossier sans dire qui c'est");
    this.p(color,7,"Aroria","Fais une improvisation theatrale que tout le monde suit");
    this.p(color,8,"Alice","Tu es le killer");
    this.p(color,9,"Sylvienne","Tu es le juge, si tu dis le prenom de quelqu'un, il boit");
    this.p(color,10,"Camille","Paris une action au de");
    this.p(color,11,"Charly","Raconte une anecdote chelou ou drole");
    this.p(color,12,"Marie","Tout le monde t'obeit pour 1 tour");
    this.p(color,13,"Thomas","Le duel");

    for(let i=0;i<100;i++)
    {
      this.shuffle();
    }
  }

  p(color:any,value:any,nom:any,action:any)
  {
    this.cards.push({color:color,value:value,nom:nom,action:action})
  }

  shuffle()
  {
    this.cards.sort(()=>Math.random()-0.5);
  }

  clickCard(card:any)
  {
    card.picked = true;
    this.cardPicked = card;
  }

  cardsLeft()
  {
    return this.cards.filter((c:any)=>!c.picked)
  }

  getValue()
  {
    let ret = this.cardPicked.value;
    if(this.cardPicked.value==13)ret="Roi";
    else if(this.cardPicked.value==12)ret="Dame";
    else if(this.cardPicked.value==11)ret="Valet";
    return ret;
  }
}
