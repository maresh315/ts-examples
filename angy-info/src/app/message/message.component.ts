import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnDestroy {
  message = {text: ''};
  subscription: Subscription;

  constructor(private service: ApiService) {
    // subscribe to component messages
    this.subscription = this.service.getMessage()?.subscribe(message => { this.message.text = message; });
  }

  ngOnDestroy() { this.subscription?.unsubscribe(); }
}
