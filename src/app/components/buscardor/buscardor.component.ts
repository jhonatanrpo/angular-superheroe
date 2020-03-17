import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.services";

@Component({
  selector: "app-buscardor",
  templateUrl: "./buscardor.component.html"
})

export class BuscardorComponent implements OnInit {
  heroes: any[]= [];
  terminoBusqueda:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.terminoBusqueda= params["terminoBusqueda"];
      this.heroes = this._heroesService.buscarHeroes(params ["terminoBusqueda"]);
      console.log(this.heroes);
      
    });
  }
}
