import { UserMsgService } from 'src/app/services/user-msg.service';
import { FactsService } from 'src/app/services/facts.service';
import { Component, OnInit } from '@angular/core';
import { Fact } from 'src/app/types';

@Component({
  selector: 'app-my-facts',
  templateUrl: './my-facts.component.html',
  styleUrls: ['./my-facts.component.scss']
})
export class MyFactsComponent implements OnInit {

  facts: Fact[] = []
  isLoading: boolean = false

  constructor(private factsService: FactsService, public userMsgService: UserMsgService) { }

  ngOnInit(): void {
    this.factsService.loadUserFacts()
      .subscribe((response: Fact[]) => { 
        this.isLoading = true
        this.facts = response 
        this.isLoading = false
      })
  }

  removeFactFromUser(id: string): void {
    this.factsService.deleteFactFromUser(id)
      .subscribe(() => {
        this.factsService.loadUserFacts()
          .subscribe((response: Fact[]) => {
            this.facts = response
            this.userMsgService.updateUserMsg({ type: 'error', text: 'Fact removed from "My Facts"' })
          })
      })
  }
}
