import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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


  constructor(private fb: FormBuilder,
    private httpService: HttpService,
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  sendBestellung(){
    let bestellung: Bestellung = {
      name: this.personendaten.controls["name"].value,
      str: this.personendaten.controls["str"].value,
      nr: this.personendaten.controls["nr"].value,
      tel: this.personendaten.controls["tel"].value,
      plz: this.personendaten.controls["plz"].value,
      ort: this.personendaten.controls["ort"].value,
      email: this.personendaten.controls["email"].value,
      scheitlaenge: this.brennholzbestellung.controls["scheitlaenge"].value,
      raummeter: this.brennholzbestellung.controls["raummeter"].value,
      date: this.brennholzbestellung.controls["date"].value
    }
    console.log(bestellung)
    this.httpService.sendBestellung(bestellung).subscribe(data=>{
      if(data.text == "Erfolg"){
        this.dialog.open(BestellungErfolgreichDialog, {
          width: '250px'
        });
      }
    });
  }
}

@Component({
  selector: 'bestellungErfolgreichDialog',
  templateUrl: 'bestellungErfolgreichDialog.html',
})
export class BestellungErfolgreichDialog {
  constructor(public dialogRef: MatDialogRef<BestellungErfolgreichDialog>) {}
}

export interface Bestellung{
  name: string | null;
  str: string| null;
  nr: string| null;
  tel: string| null;
  plz: string| null;
  ort: string| null;
  email: string| null;
  raummeter: string| null;
  scheitlaenge: string| null;
  date: Date | null;
}

export interface BestellungResponse{
  text: string;
  error: string;
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
