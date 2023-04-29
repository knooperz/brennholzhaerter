import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NgcCookieConsentService,
  NgcNoCookieLawEvent,
  NgcInitializingEvent,
  NgcStatusChangeEvent,
  NgcInitializationErrorEvent,
} from "ngx-cookieconsent";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {



  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializingSubscription!: Subscription;
  private initializedSubscription!: Subscription;
  private initializationErrorSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;

  constructor(private cookieService: NgcCookieConsentService){}

  ngOnInit() {
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.cookieService.popupOpen$.subscribe(
      () => {
        console.log("popupOpenSubscription")
        // you can use this.cookieService.getConfig() to do stuff...
      });

    this.popupCloseSubscription = this.cookieService.popupClose$.subscribe(
      () => {
        console.log("popupCloseSubscription")
        // you can use this.cookieService.getConfig() to do stuff...
      });

    this.initializingSubscription = this.cookieService.initializing$.subscribe(
      (event: NgcInitializingEvent) => {
        console.log("initializingSubscription")
        // the cookieconsent is initilializing... Not yet safe to call methods like `NgcCookieConsentService.hasAnswered()`
        console.log(`initializing: ${JSON.stringify(event)}`);
      });

    this.initializedSubscription = this.cookieService.initialized$.subscribe(
      () => {
        console.log("initializedSubscription")
        // the cookieconsent has been successfully initialized.
        // It's now safe to use methods on NgcCookieConsentService that require it, like `hasAnswered()` for eg...
        console.log(`initialized: ${JSON.stringify(event)}`);
      });

    this.initializationErrorSubscription = this.cookieService.initializationError$.subscribe(
      (event: NgcInitializationErrorEvent) => {
        console.log("initializationErrorSubscription")
        // the cookieconsent has failed to initialize...
        console.log(`initializationError: ${JSON.stringify(event.error?.message)}`);
      });

    this.statusChangeSubscription = this.cookieService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        console.log("statusChangeSubscription")
        // you can use this.cookieService.getConfig() to do stuff...
      });

    this.revokeChoiceSubscription = this.cookieService.revokeChoice$.subscribe(
      () => {
        console.log("revokeChoiceSubscription")
        // you can use this.cookieService.getConfig() to do stuff...
      });

      this.noCookieLawSubscription = this.cookieService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        console.log("noCookieLawSubscription")
        // you can use this.cookieService.getConfig() to do stuff...
      });

  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializingSubscription.unsubscribe();
    this.initializedSubscription.unsubscribe();
    this.initializationErrorSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}
