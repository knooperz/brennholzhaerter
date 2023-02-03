import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bestellung, BestellungResponse } from './brennholzbestellung/brennholzbestellung.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "http://h2992898.stratoserver.net:3000"

  constructor(private httpClient: HttpClient) { }

  sendBestellung(bestellung: Bestellung){

    let mail: SendObject = {
      empfaenger: "john99.herter@gmail.com",
      betreff: "Neue Brennholzbestellung von " + bestellung.name,
      inhalt: `Name: ${bestellung.name}\nTelefon: ${bestellung.tel}\nPLZ und Ort: ${bestellung.plz} ${bestellung.ort}\nEmail: ${bestellung.email}\nRaummeter: ${bestellung.raummeter}\nDatum: ${bestellung.date}`
    }

    return this.httpClient.post<BestellungResponse>(this.url+"/sendMail", mail);
  }

}
interface SendObject{
  empfaenger: string;
  betreff: string;
  inhalt: string;
}
