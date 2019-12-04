import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heroes";
import { Hero } from "./hero";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class HeroService {
  
  private heroesUrl = 'api/heroes';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { };
    
    /** GET heroes from the server */
    getHeroes(): Observable<Hero[]> {
      
      return this.http.get<Hero[]>(this.heroesUrl)
    }
    
    getHero(id: number): Observable<Hero> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
    }
    updateHero(hero: Hero): Observable<any> {
      return this.http.put(this.heroesUrl, hero);
    }
  }
  