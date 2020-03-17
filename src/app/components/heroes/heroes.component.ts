import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[]=[];

  constructor(private _heroesServices: HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
    //console.log(this.heroes);    
  }

  verHeroe ( idx:number ){
   this.router.navigate(['/heroe', idx]);
  }

}


