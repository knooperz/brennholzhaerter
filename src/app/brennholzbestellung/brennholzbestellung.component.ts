import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { map, Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-brennholzbestellung',
  templateUrl: './brennholzbestellung.component.html',
  styleUrls: ['./brennholzbestellung.component.scss']
})
export class BrennholzbestellungComponent implements OnInit {

  stepperOrientation?: Observable<StepperOrientation>;

  brennholzbestellung = this.fb.group({
    holzart:[null, [Validators.required]],
    scheitlaenge:[null, [Validators.required]],
    raummeter: [null, [Validators.required]],
    date: [null]
  });

  personendaten = this.fb.group({
      name: [null, [Validators.required]],
      str: [null, [Validators.required]],
      nr: [null, [Validators.required]],
      tel: [null, [Validators.required, Validators.minLength(5)]],
      plz: [null, [Validators.required, Validators.minLength(4)]],
      ort: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.minLength(5)]],
  });


  constructor(private fb: FormBuilder, private httpService: HttpService, private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  sendBestellung(){
    console.log("send")
  }
}

export interface Bestellung{
  name: string;
  strNr: string;
  tel: string;
  plz: string;
  ort: string
  email: string;
  raummeter: string;
  date: Date;
}

interface Preis{
  holzart: string;
  zustand: string;
  laenge: string;
  preis: number;
  verfuegbarkeit: string;
}

/*TODO
Berstellung 2 Formulare: Produktinfos (Holzart, Länge, raummmeter, Holzustand), Adresse => Rest
Brennholz als Produkt mit Link zu Betstellformular
Produkte => Dienstleistungen
*/
