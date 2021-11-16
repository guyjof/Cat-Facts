import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fact } from '../types';
import { Observable } from 'rxjs';

interface Facts {
  data: Fact[]
}

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  private FACTS_URL = 'http://localhost:3030/api/facts/';
  private factsPerPage: number = 10
  private maxLength: number = 250

  constructor(private http: HttpClient) { }

  public loadUserFacts() {
    return this.http.get<Fact[]>(this.FACTS_URL)
  }

  public saveFactToUser(fact: Fact) {
    return this.http.post<Fact>(this.FACTS_URL, fact)
  }

  public deleteFactFromUser(id: string) {
    return this.http.delete(this.FACTS_URL + id)
  }

  public saveFact(fact: Fact) {
    return this.http.post(this.FACTS_URL, fact)
  }

  getFacts() {
    return this.http.get<Facts>(`https://catfact.ninja/facts?max_length=${this.maxLength}&limit=${this.factsPerPage}`)
  }


}
