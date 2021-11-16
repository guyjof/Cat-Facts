import { Fact } from 'src/app/types';
import { Component, OnInit } from '@angular/core';
import { FactsService } from 'src/app/services/facts.service';

@Component({
  selector: 'app-all-facts',
  templateUrl: './all-facts.component.html',
  styleUrls: ['./all-facts.component.scss']
})
export class AllFactsComponent implements OnInit {

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

  addFactToUser(fact: Fact): void {
    this.factsService.saveFactToUser(fact)
      .subscribe(() => {
      })
  }

  ngOnInit(): void {
    this.factsService.getFacts()
      .subscribe(response => {
        this.facts = response.data as Fact[]
      })
  }

}
