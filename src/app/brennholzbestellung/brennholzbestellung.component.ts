import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-brennholzbestellung',
  templateUrl: './brennholzbestellung.component.html',
  styleUrls: ['./brennholzbestellung.component.scss']
})
export class BrennholzbestellungComponent implements OnInit {

  displayedColumns: string[] = ['holzart', 'zustand', 'laenge', 'preis', 'verfuegbarkeit'];
  preise: Preis[] = [
    {holzart: "Buche", zustand: "frisch", laenge: "25cm, 33cm, 50cm", preis: 140, verfuegbarkeit: "ausverkauft"},
    {holzart: "Buche", zustand: "trocken", laenge: "25cm, 33cm, 50cm", preis: 150, verfuegbarkeit: "ausverkauft"},
    {holzart: "Fichte", zustand: "trocken", laenge: "25cm, 33cm, 50cm", preis: 110, verfuegbarkeit: "ausverkauft"}
  ];

  brennholzbestellung = this.fb.group({
    holzart:[null],
    scheitlaenge:[null],
    raummeter: [null, [Validators.required]],
    date: [null]
  });

  personendaten = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      str: [null, [Validators.required, Validators.minLength(5)]],
      nr: [null, [Validators.required],],
      tel: [null, [Validators.required, Validators.minLength(5)]],
      plz: [null, [Validators.required, Validators.minLength(5)]],
      ort: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.minLength(5)]],
  });


  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void {

  }

  sendBestellung(){
    console.log("send")
    // let bestellung: Bestellung = {
    //   name: this.brennholzbestellung.controls["name"].value,
    //   strNr: this.brennholzbestellung.controls["strNr"].value,
    //   tel: this.brennholzbestellung.controls["tel"].value,
    //   plz: this.brennholzbestellung.controls["plz"].value,
    //   ort: this.brennholzbestellung.controls["ort"].value,
    //   email: this.brennholzbestellung.controls["email"].value,
    //   raummeter: this.brennholzbestellung.controls["raummeter"].value,
    //   date: this.brennholzbestellung.controls["date"].value
    // }
    // this.httpService.sendBestellung(bestellung).subscribe(data=>{
    //   console.log(data);
    // });
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
