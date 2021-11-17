import { UserMsgService } from 'src/app/services/user-msg.service';
import { FactsService } from 'src/app/services/facts.service';
import { Fact, Msg } from 'src/app/types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-facts',
  templateUrl: './all-facts.component.html',
  styleUrls: ['./all-facts.component.scss']
})
export class AllFactsComponent implements OnInit {

  allFacts: Fact[] = []
  myFacts: Fact[] = []
  msg: any = ''

  constructor(private factsService: FactsService, public userMsgService: UserMsgService) { }

  ngOnInit(): void {
    this.factsService.getFacts().subscribe(res => this.allFacts = res.data)
    this.factsService.loadUserFacts().subscribe(res => this.myFacts = res)
  }

  addFactToUser(fact: Fact): void {
    (this.myFacts.find(f => f.fact === fact.fact)
      ?
      this.userMsgService.updateUserMsg({ type: 'error', text: 'Fact already is in "My Facts"' })
      :
      this.factsService.saveFactToUser(fact)
        .subscribe(() => {
          this.userMsgService.updateUserMsg({ type: 'success', text: 'Fact added to "My Facts"' })
          this.factsService.loadUserFacts().subscribe(res => this.myFacts = res)
        }))

  }

}
