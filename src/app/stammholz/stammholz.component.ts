import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Observable, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-stammholz',
  templateUrl: './stammholz.component.html',
  styleUrls: ['./stammholz.component.scss']
})
export class StammholzComponent implements OnInit {

  hinweistextStammholzlaenge = "*Stammholzlänge beträgt zwischen Vier und Fünf Metern."
  lieferadresseIstRechnungsadresse = false;

  rechnungsadresse: Adresse = {
    strasse: "",
    ort: "",
    plz: "",
    nummer: undefined
  }

  stammholzbestellung = this.fb.group({
    holzart: [null, [Validators.required]],
    menge: [null, [Validators.required]],
    bemerkungen: [null, []],
  })


  personendaten = this.fb.group({
    name: [null, [Validators.required]],
    tel: [null, [Validators.required]],
    email: [null, [Validators.required]],
    strLiefer: [null, [Validators.required]],
    nrLiefer: [null, [Validators.required]],
    plzLiefer: [null, [Validators.required, Validators.minLength(4)]],
    ortLiefer: [null, [Validators.required]],
    nrRechnungs: [null, [Validators.required]],
    plzRechnungs: [null, [Validators.required, Validators.minLength(4)]],
    ortRechnungs: [null, [Validators.required]],
    strRechnungs: [null, [Validators.required]],
    rechnungsIstLiefer: [null, []]
  })

  stepperOrientation?: Observable<StepperOrientation>;


  constructor(private fb: FormBuilder,
    private httpService: HttpService,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  rechnungsadresseCheckboxChange() {

    if (this.personendaten.controls["rechnungsIstLiefer"].value) {
      this.rechnungsadresse.strasse = this.personendaten.controls["strLiefer"].value ?? "";
      this.rechnungsadresse.nummer = Number(this.personendaten.controls["nrLiefer"].value) ?? undefined;
      this.rechnungsadresse.ort = this.personendaten.controls["ortLiefer"].value ?? "";
      this.rechnungsadresse.plz = this.personendaten.controls["plzLiefer"].value ?? "";

      this.personendaten.controls["nrRechnungs"].disable();
      this.personendaten.controls["plzRechnungs"].disable();
      this.personendaten.controls["ortRechnungs"].disable();
      this.personendaten.controls["strRechnungs"].disable();
    }
    else{
      this.rechnungsadresse.strasse = "";
      this.rechnungsadresse.nummer = undefined;
      this.rechnungsadresse.ort = "";
      this.rechnungsadresse.plz = "";

      this.personendaten.controls["nrRechnungs"].enable();
      this.personendaten.controls["plzRechnungs"].enable();
      this.personendaten.controls["ortRechnungs"].enable();
      this.personendaten.controls["strRechnungs"].enable();
    }

  }

  sendBestellung() {

  }
}
interface Adresse {
  strasse: string;
  nummer: number | undefined;
  ort: string;
  plz: string;
}
