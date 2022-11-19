import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.scss']
})
export class StartseiteComponent implements OnInit {

  leistungen: Leistung[] = [
    {title: 'Brennholzbestellung',
    img: '../../assets/images/brennholz.jpg', text: ''},
    {title: 'Holztransporte', img: '../../assets/images/laster.jpg', text: ''},
    {title: 'Lohnspalten', img: '', text: ''},
    {title: 'Sonderfällungen', img: '../../assets/images/teamNew.png', text: ''},
    {title: 'Winterdienst', img: '', text: ''}];

  constructor() { }

  ngOnInit(): void {
  }

  mehrClick(link: string){
    
  }

}
export interface Leistung {
  title: string;
  text: string;
  img: string

}
