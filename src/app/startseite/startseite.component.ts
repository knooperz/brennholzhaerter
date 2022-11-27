import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.scss']
})
export class StartseiteComponent implements OnInit {

  leistungen: Leistung[] = [
    {
      title: 'Brennholzbestellung',
      img: '../../assets/images/brennholz.jpg',
      text: '',
      link: ''
    },
    {
      title: 'Holztransporte',
      img: '../../assets/images/laster.jpg',
      text: '',
       link: 'holztransporte'
    },
    {
      title: 'Lohnspalten',
      img: '',
      text: '',
      link: ''
    },
    {
      title: 'Sonderfällungen',
      img: '../../assets/images/teamNew.png',
      text: '',
      link: ''
    },
    {
      title: 'Winterdienst',
      img: '',
      text: '',
      link: ''
    }];

  constructor() { }

  ngOnInit(): void {
  }

  mehrClick(link: string) {

  }

}
export interface Leistung {
  title: string;
  text: string;
  img: string;
  link: string;
}
