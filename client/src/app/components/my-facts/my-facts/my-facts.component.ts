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
  userMsg: string = ''

  constructor(private factsService: FactsService) { }

  showMsg(msg: string): void {
    this.userMsg = msg
    const delay: number = 3500
    setTimeout(() => {
      this.userMsg = ''
    }, delay)
  }

  removeFactFromUser(id: string): void {
    if (!id) return console.error('No id');
    this.factsService.deleteFactFromUser(id)
      .subscribe(() => {
        this.factsService.loadUserFacts()
          .subscribe((response: Fact[]) => {
            this.facts = response
          })
      })
  }

  ngOnInit(): void {
    this.factsService.loadUserFacts()
      .subscribe((response: Fact[]) => { this.facts = response })
  }
}
