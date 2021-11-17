import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Fact } from '../types';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

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
      .pipe(
        catchError(this.handleError)
      )
  }

  public saveFact(fact: Fact): Observable<any> {
    return this.http.post<Fact>(this.FACTS_URL, fact)
  }

  public getFacts(): Observable<any> {
    return this.http.get<Fact[]>(`https://catfact.ninja/facts?max_length=${this.maxLength}&limit=${this.factsPerPage}`)
  }

  private handleError(error: HttpErrorResponse): any {
    return console.error(`Somthing went wrong: ${error.message}`)
  }


}
