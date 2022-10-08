import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brennholzbestellung',
  templateUrl: './brennholzbestellung.component.html',
  styleUrls: ['./brennholzbestellung.component.scss']
})
export class BrennholzbestellungComponent implements OnInit {

  brennholzbestellung: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.brennholzbestellung = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      strNr: [null, [Validators.required, Validators.minLength(5)]],
      tel: [null, [Validators.required, Validators.minLength(5)]],
      plzOrt: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.minLength(5)]],
      raummeter: [null, [Validators.required, Validators.minLength(5)]],
    })
  }

  sendBestellung(){

  }
}
