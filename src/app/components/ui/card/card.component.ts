import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnDestroy, OnInit {
  active!: string;

  subscription: Subscription = new Subscription;

  @Input() name!: string;
  @Input() price!: number;
  @Input() image!: string;

  @Output() cardButton = new EventEmitter<string>();

  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.isActive$.subscribe((newValue) => {
      this.active = newValue;
    })

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  btnCard(): void {
    this.active = 'active';
    this.cardButton.emit();
  }

  ngOnInit(): void {
    //gsap animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.catalog',
        start: "top center",
        end: "center center",
        scrub: true,
      }
    }).fromTo('.card', { opacity: 0 }, { opacity: 1, stagger: 0.4 })


  }

}
