import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

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

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
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
}
