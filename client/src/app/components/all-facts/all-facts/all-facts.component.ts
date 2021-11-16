import { Fact } from 'src/app/types';
import { Component, OnInit } from '@angular/core';
import { FactsService } from 'src/app/services/facts.service';

// interface Fact {
//   fact: string,
//   length: number
// }


@Component({
  selector: 'app-all-facts',
  templateUrl: './all-facts.component.html',
  styleUrls: ['./all-facts.component.scss']
})
export class AllFactsComponent implements OnInit {

  facts: Fact[] = []

  constructor(private factsService: FactsService) { }

  addFactToUser(fact: Fact): void {
    this.factsService.saveFactToUser(fact)
      .subscribe(() => {
        console.log('Saved fact');
      })
  }


  ngOnInit(): void {
    this.factsService.getFacts()
      .subscribe(response => {
        this.facts = response.data as Fact[]
      })
  }

}
