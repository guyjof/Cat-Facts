
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Fact } from 'src/app/types';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() value: Fact[] | [] = []
  @Input() addButton: boolean = true
  @Input() removeButton: boolean = true
  @Output() save = new EventEmitter<Fact>()
  @Output() remove = new EventEmitter<string>()
  @Output() msg = new EventEmitter<string>()

  currentItemIndex: number = 0

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMoveCarousel(diff: number): void {
    if (this.currentItemIndex === this.value.length - 1 && diff === 1) {
      this.currentItemIndex = 0
    } else if (!this.currentItemIndex && diff === -1) {
      this.currentItemIndex = this.value.length - 1
    } else {
      this.currentItemIndex += diff
    }
  }

  onMoveCarouselTo(val: number): void {
    this.currentItemIndex = val
  }
  addFactToUser(fact: Fact): void {
    this.save.emit(fact)
    this.msg.emit('Fact added to "My Facts"')
  }
  removeFactFromUser(fact: Fact): void {
    this.remove.emit(fact._id)
    this.msg.emit('Fact removed from "My Facts"')
  }
  onClick() {
    this.router.navigateByUrl('/facts');
  }

}
