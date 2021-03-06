import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {FormsModule} from '@angular/forms';
import {HeroService} from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
/*   selectedHero: Hero; */


hero: Hero={
id: 1,
name: 'Windstorm'
};

  constructor( private heroService: HeroService/*  ,  private messageService: MessageService */) { }

  ngOnInit(): void {
    this.getHeroes();
  }

 /*  onSelect(hero: Hero){
    this.selectedHero= hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  } */
  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes=> this.heroes= heroes);
  }
}
