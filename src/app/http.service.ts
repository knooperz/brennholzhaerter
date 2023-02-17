import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bestellung, BestellungResponse } from './brennholzbestellung/brennholzbestellung.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "http://h2992898.stratoserver.net:3000"

  constructor(private httpClient: HttpClient) { }

  sendBestellung(bestellung: Bestellung) {

    let mail: SendObject = {
      empfaenger: "john99.herter@gmail.com",
      betreff: "Neue Brennholzbestellung von " + bestellung.name,
      sender: bestellung.email ?? "fehlerhafteMail@test.de",
      inhalt: `<b>Neu Brennholzbestellung von:</b><br>
      ${bestellung.name} <br>
      ${bestellung.str} ${bestellung.nr} <br>
      ${bestellung.plz} ${bestellung.ort} <br>
      ${bestellung.email} <br>
      ${bestellung.tel} <br>
      <br>
      <b>Bestellung:</b><br>
      ${bestellung.raummeter} ${bestellung.holzart}<br>
      ${bestellung.scheitlaenge} <br>
      ${bestellung.date} <br>`
    }

    return this.httpClient.post<BestellungResponse>(this.url + "/sendMail", mail);
  }

}
interface SendObject {
  empfaenger: string;
  sender: string;
  betreff: string;
  inhalt: string;
}
