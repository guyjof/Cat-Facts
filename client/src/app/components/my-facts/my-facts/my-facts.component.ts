import { Component, OnInit } from '@angular/core';
import { FactsService } from 'src/app/services/facts.service';
import { Fact } from 'src/app/types';

@Component({
  selector: 'app-my-facts',
  templateUrl: './my-facts.component.html',
  styleUrls: ['./my-facts.component.scss']
})
export class MyFactsComponent implements OnInit {

  facts: Fact[] = []

  constructor(private factsService: FactsService) { }

  removeFactFromUser(id: string): void {
    if (!id) return console.error('No id');
    this.factsService.deleteFactFromUser(id)
      .subscribe(() => {
        console.log('Removed fact');
      })
  }

  ngOnInit(): void {
    this.factsService.loadUserFacts()
      .subscribe((response: Fact[]) => {
        this.facts = response
      })
  }

}
