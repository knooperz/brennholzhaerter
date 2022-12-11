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
      queryParam: { product: 'holztransport' }
    },
    {
      title: 'Holztransporte',
      img: '../../assets/images/laster.jpg',
      text: '',
      queryParam: { product: 'holztransport' }
    },
    {
      title: 'Lohnspalten',
      img: '../../assets/images/laster.jpg',
      text: '',
      queryParam: { product: 'holztransport' }
    },
    {
      title: 'Sonderfällungen',
      img: '../../assets/images/teamNew.png',
      text: '',
      queryParam: { product: 'holztransport' }
    },
    {
      title: 'Winterdienst',
      img: '../../assets/images/laster.jpg',
      text: '',
      queryParam: { product: 'winterdienst' }
    }];

    text: string = "";

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
  queryParam: ProductQuery;
}

interface ProductQuery{
  product: string;
}
