import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fact } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  private FACTS_URL = 'http://localhost:3030/api/facts/';
  private factsPerPage: number = 10
  private maxLength: number = 250

  constructor(private http: HttpClient) { }

  public loadUserFacts(): Observable<any> {
    return this.http.get<Fact[]>(this.FACTS_URL)
  }

  public saveFactToUser(fact: Fact): Observable<any> {
    return this.http.post<Fact>(this.FACTS_URL, fact)
  }

  public deleteFactFromUser(id: string): Observable<any> {
    return this.http.delete<string>(this.FACTS_URL + id)
  }

  public saveFact(fact: Fact): Observable<any> {
    return this.http.post<Fact>(this.FACTS_URL, fact)
  }

  getFacts(): Observable<any> {
    return this.http.get<Fact[]>(`https://catfact.ninja/facts?max_length=${this.maxLength}&limit=${this.factsPerPage}`)
  }


}
