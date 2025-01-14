import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dienstleistungen',
  templateUrl: './dienstleistungen.component.html',
  styleUrls: ['./dienstleistungen.component.scss']
})
export class DienstleistungenComponent implements OnInit {

  leistungen: Leistung[] = [
    {
      title: 'Brennholz',
      img: '../../assets/images/brennholz/brennholz1.jpg',
      text: '',
      queryParam: { product: 'brennholz' }
    },
    {
      title: 'Holztransporte',
      img: '../../assets/images/holztransporte/holztransport1.jpg',
      text: '',
      queryParam: { product: 'holztransport' }
    },
    {
      title: 'Lohnspalten',
      img: '../../assets/images/brennholz/IMG_20220610_171644_527.jpg',
      text: '',
      queryParam: { product: 'holztransport' }
    },
    {
      title: 'Vermietung mobiler Sägespaltautomat Vermietung mobiler Meterholzspalter',
      img: '../../assets/images/teamNew.png',
      text: '',
      queryParam: { product: 'holztransport' }
    },
    {
      title: 'Winterdienst',
      img: '../../assets/images/laster.jpg',
      text: '',
      queryParam: { product: 'winterdienst' }
    },
    {
      title: 'LT70 Bandsäge',
      img: '../../assets/images/lt170/lt170_1.jpg',
      text: '',
      queryParam: { product: 'bandsaege' }
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
