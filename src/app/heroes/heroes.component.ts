import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[];

  onSelect(hero: Hero) {
    console.log("onSelect", hero);
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroesRecibidos => this.heroes = heroesRecibidos);
  }
}
